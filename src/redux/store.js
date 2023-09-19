import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form/formSlice';
import homeReducer from './Home/homeSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    home: homeReducer,
  },
});

export default store;
