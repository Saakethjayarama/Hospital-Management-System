import * as actions from "./ActionTypes";

const INIT_STORE = {};

const reducer = (store = INIT_STORE, action) => {
  switch (action.type) {
    case actions.AUTH_INIT:
      console.log("initializing store");
      return {
        ...store,
        user: {
          ...action.payload,
          password: null,
        },
      };

    case actions.LOGIN_ERR:
      console.log("Err occ during login");
      console.log(action);
      return {
        ...store,
        user: null,
        ...action.payload,
        isProcessing: false,
      };

    case actions.LOGIN_SUCCESS:
      console.log("Successfully logged in");
      return {
        ...store,
        user: {
          ...action.payload,
        },
        isProcessing: false,
        err: null,
      };

    case actions.LOGIN_INIT: {
      console.log("Initializing Login");
      return {
        ...store,
        isProcessing: true,
      };
    }

    default:
      return store;
  }
};

export default reducer;
