import { Box, Button, Typography } from '@mui/material';
import { styles } from './style';

const BookNow = () => {
  return (
    <Box
      sx={{
        ...styles.root,
        backgroundImage: `url(/bookNowImage.jpeg)`,
        width: '100%',
        height: '100%',
      }}>
      <Box sx={styles.infoWrapper}>
        <Typography variant={'h2'} textAlign={'center'}>
          Waxing Away Unwanted Hair
        </Typography>
        <Typography variant={'body1'} textAlign={'center'} mt={'20px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Typography>
        <Button variant={'secondary'} color={'secondary'} sx={styles.button}>
          Book now
        </Button>
      </Box>
    </Box>
  );
};

export default BookNow;
