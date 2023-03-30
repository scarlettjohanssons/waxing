export const styles = {
  root: {
    padding: '160px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  infoWrapper: {
    position: 'relative',
    background: '#FFF7EF',
    maxWidth: '680px',
    width: '100%',
    padding: '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 767px)': {
      padding: '60px 20px',
      '& h2': {
        fontSize: '36px',
      },
    },
  },
  button: {
    mt: '50px',
    maxWidth: '150px',
  },
};
