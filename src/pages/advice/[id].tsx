import { homeActions } from '@/bus/home/actions';
import Advice from '@/components/advice/Advice';
import AppLayout from '@/layouts/AppLayouts';
import { initializeStore } from '@/setup/configureStore';
import { initialDispatcher } from '@/setup/initialDispatcher';
import { GetServerSideProps } from 'next';

const AdvicePage = ({ initialReduxState }: any) => {
  return (
    <AppLayout>
      <Advice advice={initialReduxState.home.currentAdvice} />
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { store } = await initialDispatcher(context, initializeStore());

  const id = context.params?.id;

  id && store.dispatch(homeActions.setCurrentAdvice(+id));

  const initialReduxState = store.getState();

  return {
    props: {
      initialReduxState,
    },
  };
};

export default AdvicePage;
