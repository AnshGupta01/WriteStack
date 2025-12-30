import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { PostCard } from '../components';
import {
  Box,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Paper,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((posts) => {
        if (posts) {
          setPosts(posts.rows);
        }
      })
      .finally(() => setLoading(false));
  }, []);

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

  if (posts.length === 0) {
    return (
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            textAlign: 'center',
            py: 8,
            px: 4,
            mt: 4,
            backgroundColor: 'background.default',
            border: '2px dashed',
            borderColor: 'divider',
            borderRadius: 3,
          }}
        >
          <AutoStoriesIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            No Posts Yet
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Be the first to share your thoughts and stories with the community.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/login')}
            sx={{ px: 4 }}
          >
            Login to Get Started
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #1976d2, #dc004e)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Discover Amazing Stories
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Read, write, and share your journey with the world
          </Typography>
        </Box>

        {/* Posts Grid */}
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.$id}>
              <PostCard {...post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;