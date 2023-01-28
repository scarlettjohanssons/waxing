import { configureStore, Middleware } from '@reduxjs/toolkit';
import * as R from 'ramda';
import { useMemo } from 'react';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

let store: any;

const sagaMiddleware = createSagaMiddleware();

const middleware: Middleware[] = [sagaMiddleware];

const bindMiddleware = (middleware: Middleware[]): Middleware[] => {
  return middleware;
};

export const Store = (initialState: any) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: true,
    middleware,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const initStore = (preloadedState: any) => {
  const defaultState = preloadedState
    ? configureStore({ reducer: rootReducer }).getState()
    : {};

  const currentState = R.mergeDeepRight(defaultState, preloadedState);

  const sagaMiddleware = createSagaMiddleware();
  const initedStore = configureStore({
    reducer: rootReducer,
    preloadedState: currentState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(...bindMiddleware([sagaMiddleware])),
  });

  (initedStore as any).sagaTask = sagaMiddleware.run(rootSaga);

  return initedStore;
};

export const initializeStore = (preloadedState = {}): any => {
  let initializedStore = store || initStore(preloadedState);
  if (preloadedState && store) {
    initializedStore = initStore(
      R.mergeDeepRight(store.getState(), preloadedState),
    );

    store = undefined;
  }

  if (typeof window === 'undefined') {
    return initializedStore;
  }

  if (!store) {
    store = initializedStore;
  }

  return initializedStore;
};

export const useStore = (initialState = {}) => {
  return useMemo(() => initializeStore(initialState), [initialState]);
};
