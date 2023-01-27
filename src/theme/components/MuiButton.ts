import { Components, Theme } from '@mui/material';

export const MuiButton: Partial<Components<Theme>> = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '50px',
        padding: '14px 24px',
        lineHeight: '16px',
        letterSpacing: '0.0125em',
        boxSizing: 'border-box',
        height: '48px',

        '&.SecondaryHover:hover': {
          background: '#5B52E7',
        },

        '.MuiButton-endIcon': {
          fontSize: '24px',
        },

        '&:hover': {
          '.MuiButton-endIcon': {
            '.useStroke': {
              stroke: '#999BFF',
            },
            '.useFill:not(.noHover)': {
              fill: '#999BFF',
            },
          },
        },

        '&.Mui-disabled': {
          background: '#33354D',
          color: '#67717E',
        },
      },
    },
    defaultProps: {
      variant: 'contained',
      color: 'primary',
      disableRipple: true,
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: 'secondary', color: 'secondary' },
        style: {
          background: 'none',
          color: '#6A483C',
          border: '1px solid #6A483C',
          borderRadius: 'initial',

          '&:hover': {
            background: '#6A483C',
            color: '#FFF',
          },
        },
      },
    ],
  },
};
