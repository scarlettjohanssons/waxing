export const styles = {
  root: {
    borderBottom: '2px solid #262626',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    color: '#885D4D',
  },
  header: {
    background: '#6A483C',
    padding: '10px',
    '& a': {
      fontSize: '14px',
    },
    '@media(max-width: 720px)': {
      display: 'none',
    },
  },
};
