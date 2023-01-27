import PartOfBody from '@/components/common/PartOfBody';
import { Box, Grid, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import ArmImage from '../../../images/OurServices/arm.png';
import BodyImage from '../../../images/OurServices/body.png';
import FaceImage from '../../../images/OurServices/face.png';
import LegsImage from '../../../images/OurServices/legs.png';
import { styles } from './style';

const OurAdvices = () => {
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
          <Grid item xs={12} md={6}>
            <PartOfBody
              image={LegsImage}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              link={'/legs-waxing'}
              part={'Legs Waxing'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PartOfBody
              image={ArmImage}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              link={'/arms-waxing'}
              part={'Arms Waxing'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PartOfBody
              image={BodyImage}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              link={'/body-waxing'}
              part={'Body Waxing'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PartOfBody
              image={FaceImage}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              link={'/face-waxing'}
              part={'Face Waxing'}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OurAdvices;
