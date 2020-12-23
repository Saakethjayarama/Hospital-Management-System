import * as actions from "./ActionTypes";

const login = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: actions.LOGIN_INIT,
    });

    fetch("http://localhost/users/verify", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { message } = data;
        if (message) {
          dispatch({
            type: actions.LOGIN_ERR,
            payload: {
              err: "Username or password is incorrect",
            },
          });
        } else {
          dispatch({
            type: actions.LOGIN_SUCCESS,
            payload: {
              ...data,
            },
          });
        }
      });
  };
};

const init = () => {
  const cookies = new Map(
    document.cookie.split("; ").map((v) => v.split("=").map(decodeURIComponent))
  );

  let payload = {};
  cookies.forEach((value, key) => {
    payload[key] = value;
  });

  return {
    type: actions.AUTH_INIT,
    payload: {
      ...payload,
    },
  };
};

export { login, init };
