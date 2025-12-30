import React, { useState, useEffect } from 'react';
import { PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { Box, Container, Grid, CircularProgress, Typography } from '@mui/material';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService
      .getPosts([])
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

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          All Posts
        </Typography>
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

export default AllPosts;