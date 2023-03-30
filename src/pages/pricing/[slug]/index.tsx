import { pricingActions } from '@/bus/pricing/actions';
import PartOfBodyPrice from '@/components/price/PartOfBodyPrice';
import AppLayout from '@/layouts/AppLayouts';
import { initializeStore } from '@/setup/configureStore';
import { initialDispatcher } from '@/setup/initialDispatcher';
import { GetServerSideProps } from 'next';

const PricingPage = () => {
  return (
    <AppLayout>
      <PartOfBodyPrice />
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
