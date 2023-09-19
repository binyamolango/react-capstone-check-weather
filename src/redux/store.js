import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form/formSlice';
import homeReducer from './Home/homeSlice';
import detailsReducer from './Details/detailsSlice';

const store = configureStore({
  reducer: {
    form: formReducer,
    home: homeReducer,
    details: detailsReducer,
  },
});

export default store;
