import PartOfBody from '@/components/common/PartOfBody';
import Sensor from '@/components/common/Sensor';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { animated, Spring } from 'react-spring';
import { styles } from './style';

const OurServices = () => {
  const [isVisibleLegs, setIsVisibleLegs] = useState(false);
  const [isVisibleArms, setIsVisibleArms] = useState(false);
  const [isVisibleBody, setIsVisibleBody] = useState(false);
  const [isVisibleFace, setIsVisibleFace] = useState(false);

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
        <Grid container spacing={3.75} sx={styles.list}>
          <Grid item xs={12} md={6}>
            <Sensor
              isVisible={isVisibleLegs}
              setIsVisible={setIsVisibleLegs}
              top={'30%'}
              bottom={'30%'}
            />
            <Spring
              config={{
                duration: isVisibleLegs ? 900 : 100,
              }}
              from={{}}
              to={{
                opacity: isVisibleLegs ? 1 : 0,
                transform: isVisibleLegs ? 'translateY(0)' : 'translateY(60%)',
              }}>
              {(styles: any) => {
                return (
                  <animated.div style={styles}>
                    <PartOfBody
                      image={'/legs.png'}
                      info={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing'
                      }
                      link={'/pricing/legs'}
                      part={'Legs Waxing'}
                    />
                  </animated.div>
                );
              }}
            </Spring>
          </Grid>
          <Grid item xs={12} md={6}>
            <Sensor
              isVisible={isVisibleArms}
              setIsVisible={setIsVisibleArms}
              top={'30%'}
              bottom={'30%'}
            />
            <Spring
              config={{
                duration: isVisibleArms ? 1000 : 100,
              }}
              from={{}}
              to={{
                opacity: isVisibleArms ? 1 : 0,
                transform: isVisibleArms ? 'translateY(0)' : 'translateY(-60%)',
              }}>
              {(styles: any) => {
                return (
                  <animated.div style={styles}>
                    <PartOfBody
                      image={'/arm.png'}
                      info={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing'
                      }
                      link={'/pricing/arms'}
                      part={'Arms Waxing'}
                    />
                  </animated.div>
                );
              }}
            </Spring>
          </Grid>
          <Grid item xs={12} md={6}>
            <Sensor
              isVisible={isVisibleBody}
              setIsVisible={setIsVisibleBody}
              top={'30%'}
              bottom={'30%'}
            />
            <Spring
              config={{
                duration: isVisibleBody ? 800 : 100,
              }}
              from={{}}
              to={{
                opacity: isVisibleBody ? 1 : 0,
                transform: isVisibleBody ? 'translateY(0)' : 'translateY(-50%)',
              }}>
              {(styles: any) => {
                return (
                  <animated.div style={styles}>
                    <PartOfBody
                      image={'/body.png'}
                      info={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing'
                      }
                      link={'/pricing/body'}
                      part={'Body Waxing'}
                    />
                  </animated.div>
                );
              }}
            </Spring>
          </Grid>
          <Grid item xs={12} md={6}>
            <Sensor
              isVisible={isVisibleFace}
              setIsVisible={setIsVisibleFace}
              top={'30%'}
              bottom={'30%'}
            />
            <Spring
              config={{
                duration: isVisibleFace ? 600 : 100,
              }}
              from={{}}
              to={{
                opacity: isVisibleFace ? 1 : 0,
                transform: isVisibleFace ? 'translateY(0)' : 'translateY(-80%)',
              }}>
              {(styles: any) => {
                return (
                  <animated.div style={styles}>
                    <PartOfBody
                      image={'/face.png'}
                      info={
                        'Lorem ipsum dolor sit amet, consectetur adipiscing'
                      }
                      link={'/pricing/face'}
                      part={'Face Waxing'}
                    />
                  </animated.div>
                );
              }}
            </Spring>
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
