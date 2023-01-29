import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { styles } from './style';
// import BigImage from '/greeting.jpeg';
// import SmallImage from '/greetingSmall.jpeg';

const Greeting = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.titleWrapper} flex={1}>
        <Typography variant={'h1'}>Шугаринг та воскова епіляція</Typography>
        <Typography variant={'body1'}>Найкращий час-це час для себе</Typography>
      </Box>
      <Box sx={styles.wrapper}>
        <Box sx={styles.imageWrapper}>
          <Box>
            <Image
              style={{
                borderTopLeftRadius: '200px',
                borderTopRightRadius: '200px',
                left: 0,
              }}
              src={'/greeting.jpeg'}
              alt={''}
              width={333.28}
              height={500}
            />
          </Box>
          <Box maxWidth={'92.91px'} width={'100%'} position={'relative'}>
            <Image
              style={{ position: 'absolute', left: '-50px', bottom: '50px' }}
              src={'/greetingSmall.jpeg'}
              alt={''}
              width={92.91}
              height={100}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Greeting;
