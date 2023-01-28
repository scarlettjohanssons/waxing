import { initializeStore } from '@/setup/configureStore';
import { initialDispatcher } from '@/setup/initialDispatcher';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import { AnyAction } from 'redux';
import { disableSaga } from './disableSaga';

export const connectReduxStore = async (
  context: GetServerSidePropsContext | NextPageContext,
  dispatchOnLoad?: AnyAction[],
) => {
  const { store } = await initialDispatcher(context, initializeStore());

  await dispatchOnLoad?.forEach((action) => {
    store.dispatch(action);
  });

  await disableSaga(store);

  const stateUpdates = {};

  return { store, stateUpdates };
};
