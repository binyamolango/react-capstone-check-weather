import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form/formSlice';
import homeReducer from './Home/homeSlice';
import detailsReducer from './Details/detailsSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    search: formReducer,
    home: homeReducer,
    details: detailsReducer,
  },
  middleware: [thunk],
});

export default store;
