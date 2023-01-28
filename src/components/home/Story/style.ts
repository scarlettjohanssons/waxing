export const styles = {
  root: {
    padding: '40px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '30px',
    '@media (max-width: 888px)': {
      flexDirection: 'column',
    },
  },
  imageWrapper: {
    position: 'relative',
    maxWidth: '100%',
    width: '100%',
    img: {
      width: '100%',
      height: 'auto',
    },
    '@media (max-width: 888px)': {
      width: '80%',
    },
    '@media (max-width: 460px)': {
      '& > div:last-child': {
        display: 'none',
      },
    },
  },
  infoWrapper: {
    flex: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  waxImage: {
    flex: 'none',
    position: 'relative',
    '@media (max-width: 1199px)': {
      display: 'none',
    },
    '& > div': {
      maxWidth: '300px',
      width: '100%',
      position: 'relative',
      '@media (max-width: 888px)': {
        maxWidth: '100%',
      },
      img: {
        width: '100%',
        height: 'auto',
      },
    },
  },
  button: {
    mt: '20px',
    maxWidth: '150px',
  },
  numberWrapper: {
    '@media (max-width: 1199px)': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
  },
};
