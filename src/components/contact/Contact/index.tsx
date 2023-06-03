import PageTitle from '@/components/common/PageTitle';
import { Box } from '@mui/material';
import React from 'react';
import { styles } from './style';

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <Box sx={styles.root}>
      <PageTitle title={'Contact'} />
      <Box sx={styles.map}>
        <iframe
          src={
            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.576750575444!2d30.44673521573133!3d50.448983879475165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdf9cb998ed1%3A0xfead7fd131c2f074!2z0KjRg9Cz0LDRgNC40L3QsyDQuCDQstC-0YHQutC-0LLQsNGPINGN0L_QuNC70Y_RhtC40Y8!5e0!3m2!1sru!2sua!4v1637162156649!5m2!1sru!2sua'
          }
          width={'100%'}
          height={'100%'}
          title={'map'}
          allowFullScreen
          loading={'lazy'}
        />
      </Box>
    </Box>
  );
};

export default Contact;
