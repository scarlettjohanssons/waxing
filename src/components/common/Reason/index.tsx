import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { styles } from './style';

type ReasonProps = {
  image: any;
  info: string;
  title: string;
  imageTop: boolean;
  imageBorderStyles?: any;
};

const Reason: React.FC<ReasonProps> = ({
  image,
  info,
  imageTop,
  title,
  imageBorderStyles,
}) => {
  return (
    <Box
      display={'flex'}
      alignItems={imageTop ? 'flex-start' : 'flex-end'}
      flexDirection={imageTop ? 'column' : 'column-reverse'}>
      <Box sx={styles.imageWrapper} m={imageTop ? '0 0 30px 0' : '30px 0 0 0'}>
        <Image
          alt={'image'}
          src={image}
          width={260}
          height={260}
          style={imageBorderStyles}
        />
      </Box>
      <Box
        sx={styles.wrapper}
        display={'flex'}
        flexDirection={imageTop ? 'column' : 'column-reverse'}>
        {imageTop && (
          <Typography variant={'h5'} mt={'10px'}>
            {title}
          </Typography>
        )}
        <Typography
          m={'10px 0'}
          textAlign={imageTop ? 'left' : 'right'}
          variant={'body2'}>
          {info}
        </Typography>
        {!imageTop && (
          <Typography
            variant={'h5'}
            mt={!imageTop ? '60px' : ''}
            textAlign={'right'}>
            {title}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Reason;
