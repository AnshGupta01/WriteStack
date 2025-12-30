import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import {
  Box,
  Paper,
  Typography,
  Alert,
  Link,
  Stack,
  Divider,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const login = async (data) => {
    setError('');
    setLoading(true);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        py: 4,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: 480,
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Logo width="120px" />
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Welcome Back
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
          Sign in to continue to WriteStack
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit(login)}>
          <Stack spacing={3}>
            <Input
              label="Email Address"
              placeholder="Enter your email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={loading}
              startIcon={<LoginIcon />}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </Stack>
        </form>

        {/* Sign Up Link */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{' '}
            <Link
              component={RouterLink}
              to="/signup"
              sx={{
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;