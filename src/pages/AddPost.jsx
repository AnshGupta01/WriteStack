import React from 'react';
import { PostForm } from '../components';
import { Box, Container } from '@mui/material';

function AddPost() {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <PostForm />
      </Container>
    </Box>
  );
}

export default AddPost;