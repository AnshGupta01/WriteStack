import React from 'react';
import { Box, Typography } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function Logo({ width = '100px', height = 'auto' }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        width,
        height,
      }}
    >
      <AutoStoriesIcon
        sx={{
          fontSize: '2.5rem',
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: '1.5rem',
          letterSpacing: '-0.5px',
          background: 'linear-gradient(135deg, #3B82F6 0%, #F43F5E 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        WriteStack
      </Typography>
    </Box>
  );
}