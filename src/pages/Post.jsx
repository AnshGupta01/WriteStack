import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { Button } from '../components';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import {
  Box,
  Container,
  Typography,
  Paper,
  CircularProgress,
  Stack,
  Chip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? (post.userId) === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((post) => {
          if (post) setPost(post);
          else navigate('/');
        })
        .finally(() => setLoading(false));
    } else navigate('/');
  }, [slug, navigate]);

  const deletePost = async () => {
    if (!post) return;
    const status = await appwriteService.deletePost(post.$id);
    if (status) {
      await appwriteService.deleteFile(post.featuredImage);
      navigate('/');
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return post ? (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Featured Image */}
      <Paper
        elevation={3}
        sx={{
          position: 'relative',
          borderRadius: 3,
          overflow: 'hidden',
          mb: 4,
        }}
      >
        <Box
          component="img"
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          sx={{
            width: '100%',
            maxHeight: 500,
            objectFit: 'cover',
          }}
        />

        {/* Author Actions */}
        {isAuthor && (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
            }}
          >
            <Button
              variant="contained"
              color="success"
              startIcon={<EditIcon />}
              onClick={() => navigate(`/edit-post/${post.$id}`)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={deletePost}
            >
              Delete
            </Button>
          </Stack>
        )}
      </Paper>

      {/* Post Content */}
      <Paper elevation={2} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
        {/* Status Chip */}
        <Box sx={{ mb: 2 }}>
          <Chip
            label={post.status === 'active' ? 'Published' : 'Draft'}
            color={post.status === 'active' ? 'success' : 'warning'}
            size="small"
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            lineHeight: 1.3,
          }}
        >
          {post.title}
        </Typography>

        {/* Content */}
        <Box
          className="browser-css"
          sx={{
            '& img': {
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 2,
              my: 2,
            },
            '& p': {
              mb: 2,
              lineHeight: 1.8,
              fontSize: '1.1rem',
              color: 'text.primary',
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              fontWeight: 700,
              mt: 3,
              mb: 2,
            },
            '& a': {
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            '& ul, & ol': {
              pl: 4,
              mb: 2,
            },
            '& blockquote': {
              borderLeft: '4px solid',
              borderColor: 'primary.main',
              pl: 2,
              py: 1,
              my: 2,
              fontStyle: 'italic',
              backgroundColor: 'action.hover',
              borderRadius: 1,
            },
            '& code': {
              backgroundColor: 'action.hover',
              padding: '2px 6px',
              borderRadius: 1,
              fontFamily: 'monospace',
            },
            '& pre': {
              backgroundColor: 'action.hover',
              p: 2,
              borderRadius: 2,
              overflow: 'auto',
              mb: 2,
            },
          }}
        >
          {parse(post.content)}
        </Box>
      </Paper>
    </Container>
  ) : null;
}
