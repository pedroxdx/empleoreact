const initialState = {
  api: {
    url: process.env.REACT_APP_API_URL,
    httpHeaders: {
      headers: {
        "Content-Type": "application/json"
        //Authorization: "Basic ZXhhbXBsZUBnbWFpbC5jb206aW52aXRhZG8yMDE5"
      }
    }
  }
};

const appReducer = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default appReducer;
