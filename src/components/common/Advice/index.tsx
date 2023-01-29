import { IAdvice } from '@/bus/home/typedefs';
import PrefixedLink from '@/components/common/PrefixedLink';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { styles } from './style';

type AdviceProps = {
  advice: IAdvice;
};

const Advice: React.FC<AdviceProps> = ({ advice }) => {
  return (
    <Box sx={styles.root}>
      <PrefixedLink href={`/advice/${advice.id}`}>
        <Box sx={styles.imageWrapper}>
          <Image alt={'image'} src={advice.image} width={350} height={260} />
        </Box>
        <Typography variant={'h5'}>{advice.title}</Typography>
      </PrefixedLink>
      {/*<Link href={`/advice/${advice.id}`} style={{ textDecoration: 'none' }}>*/}
      {/*  <Box sx={styles.imageWrapper}>*/}
      {/*    <Image alt={'image'} src={advice.image} width={350} height={260} />*/}
      {/*  </Box>*/}
      {/*  <Typography variant={'h5'}>{advice.title}</Typography>*/}
      {/*</Link>*/}
    </Box>
  );
};

export default Advice;
