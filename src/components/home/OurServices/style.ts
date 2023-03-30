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
    '@media (max-width: 1199px)': {
      display: 'none',
    },
    '& > div': {
      maxWidth: '100%',
      width: '100%',
      position: 'relative',
      img: {
        width: '100%',
        height: 'auto',
      },
    },
  },
  infoWrapper: {
    flex: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  list: {
    '& .MuiGrid-item': {
      position: 'relative',
    },
  },
};
