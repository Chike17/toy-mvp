 import React from 'react';
 import ReactDom from 'react-dom';
 import App from './App.js';
 import { Provider } from 'react-redux';
 import store from './store.js';
//  import { createStore, combineReducers, applyMiddleware } from 'redux';
//  import logger from 'redux-logger';



// const initialState = {
//   result: 1,
//   firstName: '',
//   lastName: '',
//   location: '',
//   category: '',
//   lastValues: []
// };

 // NOT IMMUTABLE
 // const reducer = (state = initialState, action) => {
 //   if (action.type === 'ADD') {
 //     state.result += action.payload;
 //   }
 //   if (action.type === 'SUBTRACT') {
 //     state.result -= action.payload;
 //   }
 //   return state;
 // };

// const reducer = (state = initialState, action) => {
//   if (action.type === 'ADD') {
//      // state = {
//      //  ...state, 
//      //  result: state.result + action.payload
//      // };
//     state = Object.assign({}, state, {
//       result: state.result + action.payload,
//       lastValues: [...state.lastValues, state.result]
//     });
//   } 
//   if (action.type === 'SUBTRACT') {
//      // state = {
//      //  ...state,
//      //  result: state.result - action.payload
//      // }
//     state = Object.assign({}, state, {
//       result: state.result - action.payload,
//       lastValues: [...state.lastValues, state.result]
//     });
//   }
//   return state;
// };

//  const nameReducer = (state = initialState, action) => {
//    if (action.type === 'CHANGE_FIRSTNAME') {
//      state = Object.assign({}, state, {
//        firstName: action.payload,
//        lastValues: [...state.lastValues, action.payload]
//      });
//    }
//    if (action.type === 'CHANGE_LASTNAME') {
//      state = Object.assign({}, state, {
//        lastName: action.payload,
//        lastValues: [...state.lastValues, action.payload]
//      });
//    }
//    return state;
//  };

//  const detailsReducer = (state = initialState, action) => {
//    if (action.type === 'CHANGE_LOCATION') {
//      state = Object.assign({}, state, {
//        location: action.payload, 
//        lastValues: [...state.lastValues, action.payload]
//      });
//    }
//    if (action.type === 'CHANGE_CATEGORY') {
//      state = Object.assign({}, state, {
//        category: action.payload,
//        lastValues: [...state.lastValues, action.payload]
//      });
//    }
//    return state;
//  };


//  const reviewReducer = () => {

//  };

//  const myLogger = (store) => (next) => (action) => {
//    console.log ('Logged Action:', action);
//    next(action);
//  };

//  const store = createStore(combineReducers({ reducer: reducer, nameReducer: nameReducer, detailsReducer: detailsReducer}), {}, applyMiddleware());
 
//  // const store = createStore(reducer);

//  store.subscribe(() => {
//    console.log('Store updated!', store.getState());

//  });



 // store.dispatch({
 //   type: 'ADD',
 //   payload: 10
 // });


 // store.dispatch({
 //   type: 'SUBTRACT',
 //   payload: 2
 // });

 // store.dispatch({
 //   type: 'ADD',
 //   payload: 20
 // });


 // store.dispatch({
 //   type: 'CHANGE_FIRSTNAME',
 //   payload: 'Chike'
 // });

 // store.dispatch({
 //   type: 'CHANGE_LASTNAME',
 //   payload: 'Onuorah'
 // });

 // store.dispatch({
 //   type: 'CHANGE_LOCATION',
 //   payload: 'Boston'
 // });


 // store.dispatch({
 //   type: 'CHANGE_CATEGORY',
 //   payload: 'Barber'
 // });


 ReactDom.render( <Provider store = {store} ><App/></Provider>, document.getElementById('app'));

