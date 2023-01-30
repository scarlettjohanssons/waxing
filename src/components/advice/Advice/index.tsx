import { getCurrentAdvice } from '@/bus/home/selectors';
import { Box, List, ListItem, Typography } from '@mui/material';
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
      <Box padding={'0 20px'} maxWidth={'1200px'} margin={'20px auto'}>
        <Box display={'flex'} gap={'20px'}>
          <Box sx={styles.imageWrapper} mr={'20px'}>
            <Image
              alt={'image'}
              src={advice.image}
              width={260}
              height={260}
              placeholder={'blur'}
              quality={75}
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8LwkAAh0BGumlBj4AAAAASUVORK5CYII='
              }
            />
          </Box>
          <Typography>{advice.body}</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          <List>
            {advice.list.map((item: string) => (
              <ListItem key={item}>
                <Typography>{item}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Advice;
