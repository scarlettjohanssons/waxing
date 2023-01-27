export const styles = {
  root: {
    borderTop: '2px solid #262626',
    '& > div:first-of-type': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      '@media(max-width: 787px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
      },
    },
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    color: '#885D4D',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    background: '#6A483C',
    padding: '10px',
  },
};
