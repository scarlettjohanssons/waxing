export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 50px',
    border: '1px solid #6A483C',
    '& > div': {
      transition: 'all .3s ease-in-out',
    },
    '&:hover': {
      '& > div': {
        transform: 'translateY(-10px)',
      },
    },
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    color: '#885D4D',
  },
};
