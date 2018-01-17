import init from '../init.js';


const detailsReducer = (state = init.initialState, action) => {
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

 export default detailsReducer;
