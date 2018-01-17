
 export function setLocation (location) {
   return {
     type: 'CHANGE_LOCATION',
     payload: location
   };
 }

 export function setCategory (category) {
   return {
     type: 'CHANGE_CATEGORY',
     payload: category
   };
 }