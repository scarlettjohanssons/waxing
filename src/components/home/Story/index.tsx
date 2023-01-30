import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { styles } from './style';

const Story = () => {
  // const [isVisibleImage, setIsVisibleImage] = useState(false);
  // const [isVisibleClients, setIsVisibleClients] = useState(false);
  // const happyCustomer = useSpring({
  //   from: { val: 0 },
  //   to: { val: isVisibleClients ? 789 : 0 },
  //   config: { duration: 1000 },
  // });
  // const yearExperience = useSpring({
  //   from: { val: 0 },
  //   to: { val: isVisibleClients ? 100 : 0 },
  //   config: { duration: 1000 },
  // });

  return (
    <Box sx={styles.root}>
      <Box sx={styles.imageWrapper}>
        {/*<Sensor*/}
        {/*  isVisible={isVisibleImage}*/}
        {/*  setIsVisible={setIsVisibleImage}*/}
        {/*  top={'30%'}*/}
        {/*  bottom={'30%'}*/}
        {/*/>*/}
        {/*<Spring*/}
        {/*  config={{*/}
        {/*    duration: 500,*/}
        {/*  }}*/}
        {/*  from={{}}*/}
        {/*  to={{*/}
        {/*    opacity: isVisibleImage ? 1 : 0,*/}
        {/*    transform: isVisibleImage ? 'translateX(0)' : 'translateX(-20%)',*/}
        {/*  }}>*/}
        {/*  {(styles: any) => {*/}
        {/*    return (*/}
        {/*      <animated.div style={styles}>*/}
        {/*        <Image*/}
        {/*          style={{*/}
        {/*            borderBottomLeftRadius: '200px',*/}
        {/*          }}*/}
        {/*          src={BigImage}*/}
        {/*          alt={''}*/}
        {/*          width={600}*/}
        {/*          height={400}*/}
        {/*        />*/}
        {/*      </animated.div>*/}
        {/*    );*/}
        {/*  }}*/}
        {/*</Spring>*/}
        <Image
          style={{
            borderBottomLeftRadius: '200px',
          }}
          src={'/story.jpeg'}
          alt={''}
          width={600}
          height={400}
        />
      </Box>
      <Box sx={styles.infoWrapper}>
        <Typography variant={'h2'}>Our Story</Typography>
        <Typography variant={'body1'}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
        </Typography>
        <Button variant={'secondary'} color={'secondary'} sx={styles.button}>
          Read More
        </Button>
        <Box
          display={'flex'}
          mt={'20px'}
          justifyContent={'space-between'}
          alignItems={'center'}
          gap={'10px'}
          position={'relative'}>
          {/*<Sensor*/}
          {/*  isVisible={isVisibleClients}*/}
          {/*  setIsVisible={setIsVisibleClients}*/}
          {/*  top={'30%'}*/}
          {/*  bottom={'30%'}*/}
          {/*/>*/}
          <Box sx={styles.numberWrapper}>
            <Box
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}
              mb={'40px'}>
              <Box display={'flex'}>
                <Typography variant={'experience'}>
                  {/*<animated.span>*/}
                  {/*  {happyCustomer.val.interpolate((val) => Math.floor(val))}*/}
                  {/*</animated.span>*/}
                  789
                </Typography>
                <Typography variant={'body2'}>+</Typography>
              </Box>
              <Typography variant={'body2'}>Happy Customers</Typography>
            </Box>
            <Box
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}>
              <Box display={'flex'}>
                <Typography variant={'experience'}>
                  {/*<animated.span>*/}
                  {/*  {yearExperience.val.interpolate((val) => Math.floor(val))}*/}
                  {/*</animated.span>*/}
                  100
                </Typography>
                <Typography variant={'body2'}>+</Typography>
              </Box>
              <Typography variant={'body2'}>Year Experience</Typography>
            </Box>
          </Box>
          <Box>
            <Box sx={styles.waxImage}>
              {/*<Spring*/}
              {/*  config={{*/}
              {/*    duration: 500,*/}
              {/*  }}*/}
              {/*  from={{}}*/}
              {/*  to={{*/}
              {/*    opacity: isVisibleClients ? 1 : 0,*/}
              {/*    transform: isVisibleClients*/}
              {/*      ? 'translateX(0)'*/}
              {/*      : 'translateX(-20%)',*/}
              {/*  }}>*/}
              {/*  {(styles: any) => {*/}
              {/*    return (*/}
              {/*      <animated.div style={styles}>*/}
              {/*        <Image src={WaxImage} alt={''} width={300} height={200} />*/}
              {/*      </animated.div>*/}
              {/*    );*/}
              {/*  }}*/}
              {/*</Spring>*/}
              <Image src={'/wax.webp'} alt={''} width={300} height={200} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Story;
