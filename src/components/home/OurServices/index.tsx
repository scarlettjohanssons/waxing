import PartOfBody from '@/components/common/PartOfBody';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ArmImage from '../../../images/OurServices/arm.png';
import BodyImage from '../../../images/OurServices/body.png';
import FaceImage from '../../../images/OurServices/face.png';
import LegsImage from '../../../images/OurServices/legs.png';
import ServicesImage from '../../../images/OurServices/servicesImage.jpeg';
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
      <Box sx={styles.imageWrapper}>
        <Image src={ServicesImage} alt={''} width={400} height={600} />
      </Box>
    </Box>
  );
};

export default OurServices;
