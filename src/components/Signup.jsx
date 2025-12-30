import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
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
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const create = async (data) => {
    setError('');
    setLoading(true);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(login(currentUser));
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
          Create Account
        </Typography>
        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
          Sign up to start sharing your stories
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit(create)}>
          <Stack spacing={3}>
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters',
                },
              })}
            />

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
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={loading}
              startIcon={<PersonAddIcon />}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </Stack>
        </form>

        {/* Sign In Link */}
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?{' '}
            <Link
              component={RouterLink}
              to="/login"
              sx={{
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Signup;