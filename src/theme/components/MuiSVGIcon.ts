import { Components, Theme } from '@mui/material';

export const MuiSvgIcon: Partial<Components<Theme>> = {
  MuiSvgIcon: {
    defaultProps: {
      fontSize: 'medium',
      htmlColor: 'white',
    },
    variants: [
      {
        props: {
          fontSize: 'medium',
        },
        style: {
          fontSize: '32px',
          width: '32px',
          height: '32px',
        },
      },
      {
        props: {
          fontSize: 'small',
        },
        style: {
          fontSize: '20px',
          width: '20px',
          height: '20px',
        },
      },
      {
        props: {
          fontSize: 'large',
        },
        style: {
          fontSize: '40px',
          width: '40px',
          height: '40px',
        },
      },
      {
        props: {
          color: 'primary',
        },
        style: {
          color: '#885D4D',
        },
      },
    ],
  },
};
