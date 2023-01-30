import { getPricing } from '@/bus/pricing/selectors';
import { IPricingPart } from '@/bus/pricing/typedefs';
import PageTitle from '@/components/common/PageTitle';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './style';

type PriceProps = {};

const Price: React.FC<PriceProps> = () => {
  const pricing = useSelector(getPricing);

  return (
    <Box sx={styles.root}>
      <PageTitle title={'Price'} />
      <Box
        display={'flex'}
        flexDirection={'column'}
        padding={'0 20px'}
        maxWidth={'1200px'}
        margin={'20px auto'}>
        {pricing.map((item: IPricingPart) => (
          <Box key={item.id} display={'flex'}>
            <Typography variant={'body2'}>{item.service}</Typography>
            <Typography variant={'body2'}>{item.price}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Price;
