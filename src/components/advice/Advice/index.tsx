import { IAdvice } from '@/bus/home/typedefs';
import bg from '@/images/Advice/image.jpeg';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { styles } from './style';

type AdviceProps = {
  advice: IAdvice;
};

const Advice: React.FC<AdviceProps> = ({ advice }) => {
  return (
    <Box sx={styles.root}>
      <Box
        height={'300px'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Box
          sx={{
            ...styles.bg,
            backgroundImage: `url(${bg.src})`,
          }}
        />
        <Typography variant={'h2'}>{advice.title}</Typography>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Advice;
