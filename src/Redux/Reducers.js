import * as actions from "./ActionTypes";

const INIT_STORE = {};

const reducer = (store = INIT_STORE, action) => {
  switch (action.type) {
    case actions.AUTH_INIT:
      console.log("initializing authentication");
      return {
        ...store,
        ...action.payload,
      };

    case actions.LOGIN_ERR:
      return {
        ...store,
        ...action.payload,
        isProcessing: false,
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...store,
        ...action.payload,
        isProcessing: false,
      };

    case actions.LOGIN_INIT: {
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
