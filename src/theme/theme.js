import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB',
    },
    secondary: {
      main: '#F43F5E',
      light: '#FB7185',
      dark: '#E11D48',
    },
    background: {
      default: '#0D1118',
      paper: '#161B22',
    },
    text: {
      primary: '#E6EDF3',
      secondary: '#8B949E',
    },
    success: {
      main: '#10B981',
    },
    error: {
      main: '#EF4444',
    },
    warning: {
      main: '#F59E0B',
    },
    info: {
      main: '#3B82F6',
    },
    divider: 'rgba(139, 148, 158, 0.2)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.015625em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.0125em',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          borderRadius: '12px',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            boxShadow: '0 6px 20px rgba(59, 130, 246, 0.6)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
          boxShadow: '0 4px 12px rgba(244, 63, 94, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
            boxShadow: '0 6px 20px rgba(244, 63, 94, 0.6)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#161B22',
          border: '1px solid rgba(139, 148, 158, 0.2)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
            borderColor: 'rgba(59, 130, 246, 0.4)',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#161B22',
          border: '1px solid rgba(139, 148, 158, 0.2)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#161B22',
          borderBottom: '1px solid rgba(139, 148, 158, 0.2)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '& fieldset': {
              borderColor: 'rgba(139, 148, 158, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(59, 130, 246, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#3B82F6',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
