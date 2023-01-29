import { getCurrentAdvice } from '@/bus/home/selectors';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './style';

type AdviceProps = {};

const Advice: React.FC<AdviceProps> = () => {
  const advice = useSelector(getCurrentAdvice);

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
            backgroundImage: `url(/adviceImage.jpeg)`,
          }}
        />
        <Typography variant={'h2'}>{advice.title}</Typography>
      </Box>
      <Box>
        <Box sx={styles.imageWrapper}>
          <Image alt={'image'} src={advice.image} width={260} height={260} />
        </Box>
      </Box>
    </Box>
  );
};

export default Advice;
