 import { createStore, combineReducers, applyMiddleware } from 'redux';
 import logger from 'redux-logger';
 import { Provider } from 'react-redux';


 const initialState = {
   result: 1,
   firstName: '',
   lastName: '',
   location: '',
   category: '',
   lastValues: []
 };


 const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
     // state = {
     //  ...state, 
     //  result: state.result + action.payload
     // };
    state = Object.assign({}, state, {
      result: state.result + action.payload,
      lastValues: [...state.lastValues, state.result]
    });
  } 
  if (action.type === 'SUBTRACT') {
     // state = {
     //  ...state,
     //  result: state.result - action.payload
     // }
    state = Object.assign({}, state, {
      result: state.result - action.payload,
      lastValues: [...state.lastValues, state.result]
    });
  }
  return state;
};

 const nameReducer = (state = initialState, action) => {
   if (action.type === 'CHANGE_FIRSTNAME') {
     state = Object.assign({}, state, {
       firstName: action.payload,
       lastValues: [...state.lastValues, action.payload]
     });
   }
   if (action.type === 'CHANGE_LASTNAME') {
     state = Object.assign({}, state, {
       lastName: action.payload,
       lastValues: [...state.lastValues, action.payload]
     });
   }
   return state;
 };

 const detailsReducer = (state = initialState, action) => {
   if (action.type === 'CHANGE_LOCATION') {
     state = Object.assign({}, state, {
       location: action.payload, 
       lastValues: [...state.lastValues, action.payload]
     });
   }
   if (action.type === 'CHANGE_CATEGORY') {
     state = Object.assign({}, state, {
       category: action.payload,
       lastValues: [...state.lastValues, action.payload]
     });
   }
   return state;
 };


 const reviewReducer = () => {

 };

 const myLogger = (store) => (next) => (action) => {
   console.log ('Logged Action:', action);
   next(action);
 };

 const store = createStore(combineReducers({ reducer: reducer, nameReducer: nameReducer, detailsReducer: detailsReducer}), {}, applyMiddleware());
 
 // const store = createStore(reducer);

 store.subscribe(() => {
   console.log('Store updated!', store.getState());

 });
 export default store;