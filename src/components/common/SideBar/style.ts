export const styles = {
  drawerPaper: {
    background: '#FFEBD6',
    width: {
      xs: '100%',
      sm: '360px',
    },
  },
  drawerHead: {
    display: 'flex',
    p: '20px',
    justifyContent: 'space-between',
  },
  linkWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    mt: '20px',
    '& a': {
      padding: '0 20px',
      fontSize: '14px',
      textTransform: 'uppercase',
    },
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    color: '#885D4D',
  },
};
