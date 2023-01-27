import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { styles } from './style';

type PartOfBodyProps = {
  image: any;
  info: string;
  link: string;
  part: string;
};

const PartOfBody: React.FC<PartOfBodyProps> = ({ image, info, link, part }) => {
  return (
    <Box sx={styles.root}>
      <Box>
        <Box>
          <Image alt={'image'} src={image} width={34} height={34} />
        </Box>
        <Typography variant={'h5'} mt={'10px'}>
          {part}
        </Typography>
        <Typography m={'10px 0'}>{info}</Typography>
        <Link style={styles.link} href={link}>
          Learn more &#x2192;
        </Link>
      </Box>
    </Box>
  );
};

export default PartOfBody;
