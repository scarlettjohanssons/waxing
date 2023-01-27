import { Components, Theme } from '@mui/material';

export const MuiIconButton: Partial<Components<Theme>> = {
  MuiIconButton: {
    defaultProps: {
      disableRipple: true,
      size: 'medium',
      color: 'primary',
    },
    variants: [
      {
        props: { color: 'default' },
        style: {
          border: 'none',
        },
      },
    ],
  },
};
