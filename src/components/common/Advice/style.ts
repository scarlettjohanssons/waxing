export const styles = {
  root: {
    cursor: 'pointer',
  },
  imageWrapper: {
    maxWidth: '100%',
    width: '100%',
    position: 'relative',
    transition: 'all 0.3s ease',
    img: {
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
    },
    '&:hover': {
      transform: 'translateY(-10px)',
    },
  },
};
