import { Box, Typography } from '@mui/material';
import React from 'react';
import { styles } from './style';

type AdviceProps = {
  title: string;
};

const PageTitle: React.FC<AdviceProps> = ({ title }) => {
  return (
    <Box
      height={'300px'}
      display={'flex'}
      justifyContent={'center'}
      padding={'0 20px'}
      alignItems={'center'}>
      <Box
        sx={{
          ...styles.bg,
          backgroundImage: `url(/bgImage.jpeg)`,
        }}
      />
      <Typography variant={'h3'} textAlign={'center'}>
        {title}
      </Typography>
    </Box>
  );
};

export default PageTitle;
