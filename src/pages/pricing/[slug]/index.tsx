import { pricingActions } from '@/bus/pricing/actions';
import AppLayout from '@/layouts/AppLayouts';
import { initializeStore } from '@/setup/configureStore';
import { initialDispatcher } from '@/setup/initialDispatcher';
import { Box } from '@mui/material';
import { GetServerSideProps } from 'next';

const PricingPage = () => {
  return (
    <AppLayout>
      <Box>index.tsx</Box>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store } = await initialDispatcher(context, initializeStore());

  const slug = context.params?.slug;

  slug &&
    store.dispatch(pricingActions.setCurrentPricePartOfBody(slug as string));

  const initialReduxState = store.getState();

  return {
    props: {
      initialReduxState,
    },
  };
};

export default PricingPage;
