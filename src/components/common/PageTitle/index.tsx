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
      alignItems={'center'}>
      <Box
        sx={{
          ...styles.bg,
          backgroundImage: `url(/adviceImage.jpeg)`,
        }}
      />
      <Typography variant={'h2'}>{title}</Typography>
    </Box>
  );
};

export default PageTitle;
