import { configureStore, Middleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware: Middleware[] = [sagaMiddleware];

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

export const createStore = (initialState = {}) => Store(initialState);
