import React, { useMemo } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import appwriteService from '../appwrite/config';

function PostCard({ $id, title, featuredImage, status }) {

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardMedia
        component="img"
        loading="lazy"
        height="220"
        image={appwriteService.getFilePreview(featuredImage)}
        alt={title}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Chip
            label={status === 'active' ? 'Published' : 'Draft'}
            size="small"
            color={status === 'active' ? 'success' : 'warning'}
          />
        </Box>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            lineHeight: 1.4,
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 0, px: 2, pb: 2 }}>
        <Button
          component={RouterLink}
          to={`/post/${$id}`}
          size="small"
          endIcon={<ArrowForwardIcon />}
          fullWidth
          variant="outlined"
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
export default PostCard;