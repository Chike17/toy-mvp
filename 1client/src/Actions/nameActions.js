
export function setFname(fName) {
  return {
    type: 'CHANGE_FIRSTNAME',
    payload: fName
  };
}

export function setLname (lName) {
  return {
    type: 'CHANGE_LASTNAME',
    payload: lName
  };
}