import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../Logo';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#161B22',
        borderTop: '1px solid',
        borderTopColor: 'rgba(139, 148, 158, 0.2)',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Logo and Description */}
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <Logo width="100px" />
            </RouterLink>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 300 }}>
              Share your thoughts and stories with the world.
            </Typography>
          </Box>

          {/* Center - Copyright */}
          <Typography variant="body2" color="text.secondary">
            &copy; {currentYear} WriteStack. All rights reserved.
          </Typography>

          {/* Social Links */}
          <Stack direction="row" spacing={1}>
            <IconButton
              component="a"
              href="https://github.com/AnshGupta01"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/anshexe"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
