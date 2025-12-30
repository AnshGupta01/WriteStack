import React, { useEffect, useState } from 'react';
import { PostForm } from '../components';
import appwriteService from '../appwrite/config';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Container, CircularProgress } from '@mui/material';

function EditPost() {
  const [post, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPosts(post);
          } else {
            navigate('/');
          }
        })
        .finally(() => setLoading(false));
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

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
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <PostForm post={post} />
      </Container>
    </Box>
  ) : null;
}

export default EditPost;