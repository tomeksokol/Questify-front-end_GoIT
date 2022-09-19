const saveTokenToSS = (value) => {
  try {
    const serializedState = JSON.stringify(value);
    sessionStorage.setItem("TOKEN", serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};


const saveUserToSS = (value) => {
  try {
    const serializedState = JSON.stringify(value);
    sessionStorage.setItem("USER", serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};




export {
  saveTokenToSS,
  saveUserToSS,
};