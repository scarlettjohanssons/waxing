import PartOfBody from '@/components/common/PartOfBody';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { styles } from './style';

const OurServices = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.infoWrapper}>
        <Typography variant={'h2'} textAlign={'center'}>
          Our Services
        </Typography>
        <Box display={'flex'} justifyContent={'center'} m={'20px 0'}>
          <Typography variant={'body1'} textAlign={'center'} maxWidth={'460px'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </Typography>
        </Box>
        <Grid container spacing={3.75}>
          <Grid item xs={12} md={6}>
            <PartOfBody
              image={'/legs.png'}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              link={'/pricing/legs'}
              part={'Legs Waxing'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PartOfBody
              image={'/arm.png'}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              link={'/pricing/arms'}
              part={'Arms Waxing'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PartOfBody
              image={'/body.png'}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              link={'/pricing/body'}
              part={'Body Waxing'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PartOfBody
              image={'/face.png'}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              link={'/pricing/face'}
              part={'Face Waxing'}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.imageWrapper}>
        <Image src={'/servicesImage.jpeg'} alt={''} width={400} height={600} />
      </Box>
    </Box>
  );
};

export default OurServices;
