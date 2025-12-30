import React from 'react';
import { Button as MuiButton } from '@mui/material';

export default function Button({
  children,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  ...props
}) {
  return (
    <MuiButton
      type={type}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      {...props}
    >
      {children}
    </MuiButton>
  );
}