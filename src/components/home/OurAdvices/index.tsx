import { getAdvices } from '@/bus/home/selectors';
import Advice from '@/components/common/Advice';
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { styles } from './style';

const OurAdvices = () => {
  const advices = useSelector(getAdvices);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.infoWrapper}>
        <Typography variant={'h2'} textAlign={'center'}>
          Our Advices
        </Typography>
        <Box display={'flex'} justifyContent={'center'} m={'20px 0'}>
          <Typography variant={'body1'} textAlign={'center'} maxWidth={'460px'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </Typography>
        </Box>
        <Grid container spacing={3.75}>
          {advices.map((advice) => (
            <Grid key={advice.id} item xs={12} sm={6} md={4}>
              <Advice advice={advice} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OurAdvices;
