import PageTitle from '@/components/common/PageTitle';
import { Box } from '@mui/material';
import React from 'react';
import { styles } from './style';

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <Box sx={styles.root}>
      <PageTitle title={'Contact'} />
    </Box>
  );
};

export default Contact;
