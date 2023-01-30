import { getCurrentAdvice } from '@/bus/home/selectors';
import PageTitle from '@/components/common/PageTitle';
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
      <PageTitle title={advice.title} />
      <Box padding={'0 20px'} maxWidth={'1200px'} margin={'20px auto'}>
        <Box
          display={'flex'}
          gap={'20px'}
          alignItems={'flex-end'}
          sx={styles.wrapper}>
          <Box sx={styles.imageWrapper}>
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
          <Box flex={1}>
            <Typography variant={'body2'}>{advice.body}</Typography>
          </Box>
        </Box>
        {advice.list && (
          <Box display={'flex'} flexDirection={'column'}>
            <List>
              {advice.list.map((item: string) => (
                <ListItem key={item} sx={styles.listItem}>
                  <Typography variant={'body2'}>{item}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
        <Box>
          <Typography mt={'10px'} variant={'body2'}>
            {advice?.body2}
          </Typography>
          <Typography mt={'10px'} variant={'body2'}>
            {advice?.body3}
          </Typography>
          <Typography mt={'10px'} variant={'body2'}>
            {advice?.body4}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Advice;
