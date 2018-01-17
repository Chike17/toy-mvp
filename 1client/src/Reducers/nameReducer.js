import init from '../init.js';


const nameReducer = (state = init.initialState, action) => {
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

 export default nameReducer;
