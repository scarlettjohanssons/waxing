import { Components, Theme } from '@mui/material';

export const MuiTypography: Partial<Components<Theme>> = {
  MuiTypography: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
      }),
      body2: {
        style: {
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '16px',
        },
      },
    },
    variants: [
      {
        props: { variant: 'title' },
        style: {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '32px',
          lineHeight: '38px',
          letterSpacing: '-0.02em',
        },
      },
      {
        props: { variant: 'h3' },
        style: ({ theme }) => ({
          fontSize: '48px',
          fontWeight: 500,
          lineHeight: '56.25px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '32px',
          },
        }),
      },
      {
        props: { variant: 'body1' },
        style: {
          fontSize: '16px',
          fontWeight: 300,
          '@media (max-width: 1024px)': {
            fontSize: '14px',
          },
        },
      },
      {
        props: { variant: 'body2', color: 'primary' },
        style: {
          color: '#fff',
        },
      },
      {
        props: { variant: 'body2', color: 'secondary' },
        style: {
          color: '#9DA4AF',
        },
      },
      {
        props: { variant: 'h5' },
        style: {
          fontSize: '24px',
          lineHeight: '30.47px',
          fontWeight: 500,
          color: '#6A483C',
        },
      },
      {
        props: { variant: 'caption' },
        style: {
          fontSize: '12px',
          lineHeight: '14.06px',
          color: '#9DA4AF',
          fontWeight: 400,
        },
      },
      {
        props: { variant: 'overline' },
        style: {
          fontSize: '10px',
          fontWeight: 400,
          lineHeight: '12px',
        },
      },
      {
        props: { variant: 'subtitle2' },
        style: {
          fontSize: '14px',
          fontWeight: 700,
          lineHeight: '16px',
        },
      },
      {
        props: { variant: 'experience' },
        style: {
          fontSize: '40px',
          fontWeight: 400,
          lineHeight: '44px',
        },
      },
    ],
  },
};
