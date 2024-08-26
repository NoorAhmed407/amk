import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './Reducers';
import logger from 'redux-logger'

const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger)
});
const Persistor = persistStore(Store);


export {
  Store,
  Persistor
}