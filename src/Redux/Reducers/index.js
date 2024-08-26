import {combineReducers} from '@reduxjs/toolkit';
import PlacesReducer from './PlacesReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const RootReducer = combineReducers({
  PlacesReducer: persistReducer(persistConfig, PlacesReducer),
});

export default RootReducer;