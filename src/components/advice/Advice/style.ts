export const styles = {
  root: {
    position: 'relative',
  },
  imageWrapper: {
    marginRight: '10px',
    display: 'flex',
    maxWidth: '300px',
    width: '100%',
    position: 'relative',
    transition: 'all 0.3s ease',
    img: {
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
    },
    '@media (max-width: 720px)': {
      margin: 0,
    },
  },
  listItem: {
    borderLeft: '1px solid #6A473C',
  },
  wrapper: {
    '@media (max-width: 720px)': {
      flexDirection: 'column-reverse',
    },
  },
};
