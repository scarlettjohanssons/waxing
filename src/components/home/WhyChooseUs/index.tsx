import Reason from '@/components/common/Reason';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styles } from './style';

const WhyChooseUs = () => {
  const themes = useTheme();
  const isSM = useMediaQuery(themes.breakpoints.down('sm'));

  return (
    <Box sx={styles.root}>
      <Typography variant={'h2'} textAlign={'center'}>
        Why Choose Us
      </Typography>
      <Typography variant={'body1'} textAlign={'center'} mt={'20px'}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque.
      </Typography>
      <Box sx={styles.infoWrapper}>
        <Grid container spacing={3.75}>
          <Grid item xs={12} sm={6} md={3}>
            <Reason
              image={'/professionalTeam.jpeg'}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              title={'Professional Team'}
              imageTop
              imageBorderStyles={isSM ? {} : { borderTopLeftRadius: '50%' }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Reason
              image={'/hygienicPlace.jpeg'}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              title={'Hygienic Place'}
              imageTop={isSM}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Reason
              image={'/naturalIngredients.jpeg'}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              title={'Natural Ingredients'}
              imageTop
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Reason
              image={'/painlessWaxing.jpeg'}
              info={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
              title={'Painless Waxing'}
              imageTop={isSM}
              imageBorderStyles={isSM ? {} : { borderBottomRightRadius: '50%' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
