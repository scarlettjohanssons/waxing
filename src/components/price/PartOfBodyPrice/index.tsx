import { getPartOfPrice } from '@/bus/pricing/selectors';
import { IPricingPart } from '@/bus/pricing/typedefs';
import PageTitle from '@/components/common/PageTitle';
import { partOfBodyTile } from '@/helpers/partOfBodyTile';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './style';

type PartOfBodyPriceProps = {};

const PartOfBodyPrice: React.FC<PartOfBodyPriceProps> = () => {
  const price = useSelector(getPartOfPrice);
  const router = useRouter();

  return (
    <Box sx={styles.root}>
      {router.query.slug && (
        <PageTitle title={partOfBodyTile(router.query.slug)} />
      )}
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={'10px'}
        padding={'0 20px'}
        maxWidth={'1200px'}
        margin={'20px auto'}>
        {price?.map((item: IPricingPart) => (
          <Box key={item.id} display={'flex'} justifyContent={'space-between'}>
            <Typography variant={'body2'} fontSize={'32px'}>
              {item.service}
            </Typography>
            <Typography variant={'body2'} fontSize={'32px'}>
              {item.price}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PartOfBodyPrice;
