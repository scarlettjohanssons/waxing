import { homeActions } from '@/bus/home/actions';
import Advice from '@/components/advice/Advice';
import AppLayout from '@/layouts/AppLayouts';
import { initializeStore } from '@/setup/configureStore';
import { initialDispatcher } from '@/setup/initialDispatcher';
import { GetStaticPaths, GetStaticProps } from 'next';

const AdvicePage = ({ initialReduxState }: any) => {
  return (
    <AppLayout>
      <Advice advice={initialReduxState.home.currentAdvice} />
    </AppLayout>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: any }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
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
