import React, { useId } from 'react';
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, Box } from '@mui/material';

function Select({ options, label, variant = 'outlined', size = 'medium', value, defaultValue, ...props }, ref) {
  const id = useId();

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth variant={variant} size={size}>
        {label && <InputLabel id={id}>{label}</InputLabel>}
        <MuiSelect 
          labelId={id} 
          id={id} 
          label={label} 
          inputRef={ref}
          value={value}
          defaultValue={defaultValue || (options && options.length > 0 ? options[0] : '')}
          {...props}
        >
          {options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
}

export default React.forwardRef(Select);