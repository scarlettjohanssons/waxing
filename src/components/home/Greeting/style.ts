export const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    '@media (max-width: 888px)': {
      flexDirection: 'column',
      gap: '60px',
    },
  },
  titleWrapper: {
    marginTop: '80px',
    '@media (max-width: 888px)': {
      marginTop: '20px',
      '& h1': {
        fontSize: '60px',
      },
    },
  },
  wrapper: {
    display: 'flex',
    '@media (max-width: 888px)': {
      justifyContent: 'center',
    },
  },
  imageWrapper: {
    position: 'relative',
    '& > div': {
      img: {
        width: '100%',
        height: 'auto',
      },
    },
    '& > div:first-of-type': {
      maxWidth: '333.28px',
      width: '100%',
      position: 'relative',
      '@media (max-width: 888px)': {
        maxWidth: '100%',
      },
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
  smallImage: {
    position: 'absolute',
  },
};
