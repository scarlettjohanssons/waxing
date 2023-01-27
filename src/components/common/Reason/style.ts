import { Theme } from '@mui/material';

export const styles = {
  root: {},
  imageWrapper: (theme: Theme) => ({
    maxWidth: '260px',
    width: '100%',
    position: 'relative',
    transition: 'all 0.3s ease',
    img: {
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
    },
    '&': {
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
      },
    },
    '&:hover': {
      transform: 'translateY(-10px)',
    },
  }),
  wrapper: {
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
  },
};
