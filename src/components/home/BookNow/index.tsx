import Sensor from '@/components/common/Sensor';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { animated, Spring } from 'react-spring';
import { styles } from './style';

const BookNow = () => {
  const [isVisibleBlock, setIsVisibleBlock] = useState(false);

  return (
    <Box
      sx={{
        ...styles.root,
        backgroundImage: `url(/bookNowImage.jpeg)`,
        width: '100%',
        height: '100%',
      }}>
      <Box sx={styles.infoWrapper}>
        <Sensor
          isVisible={isVisibleBlock}
          setIsVisible={setIsVisibleBlock}
          top={'30%'}
          bottom={'30%'}
        />
        <Spring
          config={{
            duration: 500,
          }}
          from={{}}
          to={{
            opacity: isVisibleBlock ? 1 : 0,
            transform: isVisibleBlock ? 'translateX(0)' : 'translateX(50%)',
          }}>
          {(style: any) => {
            return (
              <animated.div
                style={{
                  ...style,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <Typography variant={'h2'} textAlign={'center'}>
                  Waxing Away Unwanted Hair
                </Typography>
                <Typography variant={'body1'} textAlign={'center'} mt={'20px'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </Typography>
                <Button
                  variant={'secondary'}
                  color={'secondary'}
                  sx={styles.button}>
                  Book now
                </Button>
              </animated.div>
            );
          }}
        </Spring>
      </Box>
    </Box>
  );
};

export default BookNow;
