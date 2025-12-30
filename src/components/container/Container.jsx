import React from 'react';
import { Container as MuiContainer } from '@mui/material';

function Container({ children, maxWidth = 'lg' }) {
  return <MuiContainer maxWidth={maxWidth}>{children}</MuiContainer>;
}

export default Container;