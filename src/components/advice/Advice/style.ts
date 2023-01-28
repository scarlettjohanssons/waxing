export const styles = {
  root: {
    position: 'relative',
  },
  bg: {
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '100%',
    height: '300px',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    zIndex: -1,
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
