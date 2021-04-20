// import { createStore, combineReducers } from 'redux'; // redux
// import { composeWithDevTools } from 'redux-devtools-extension'; // redux

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; // toolkit
import logger from 'redux-logger';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import contactReducer from './contact/contactReducer';

// rootReducer on redux
// const rootReducer = combineReducers({
//   contacts: persistedReducer(persistConfig, contactReducer),
// });

// store on redux
// const store = createStore(rootReducer, composeWithDevTools());

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]; //toolkit

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

//store on toolkit
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
