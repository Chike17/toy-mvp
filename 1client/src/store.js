 import { createStore, combineReducers, applyMiddleware } from 'redux';
 import logger from 'redux-logger';
 import { Provider } from 'react-redux';
 import nameReducer from './Reducers/nameReducer';
 import detailsReducer from './Reducers/detailsReducer';

 const initialState = {
   result: 1,
   firstName: '',
   lastName: '',
   location: '',
   category: '',
   lastValues: []
 };

 const myLogger = (store) => (next) => (action) => {
   console.log ('Logged Action:', action);
   next(action);
 };

 const store = createStore(combineReducers({nameReducer: nameReducer, detailsReducer: detailsReducer}), {}, applyMiddleware());
 
 // const store = createStore(reducer);

 store.subscribe(() => {
   console.log('Store updated!', store.getState());

 });
 export default store;