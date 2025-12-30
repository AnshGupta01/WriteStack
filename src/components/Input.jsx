import React, { useId } from 'react';
import { TextField, Box } from '@mui/material';

const Input = React.forwardRef(function Input(
  {
    label,
    type = 'text',
    variant = 'outlined',
    size = 'medium',
    fullWidth = true,
    error = false,
    helperText = '',
    placeholder,
    ...props
  },
  ref
) {
  const id = useId();

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        id={id}
        label={label}
        type={type}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        error={error}
        helperText={helperText}
        placeholder={placeholder}
        inputRef={ref}
        InputLabelProps={{
          shrink: placeholder || type === 'file' ? true : undefined,
        }}
        {...props}
      />
    </Box>
  );
});

export default Input;