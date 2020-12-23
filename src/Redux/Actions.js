import * as actions from "./ActionTypes";

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const login = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: actions.LOGIN_INIT,
    });

    fetch("http://localhost/users/verify.php", {
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
          for (const [key, value] of Object.entries(data)) {
            if (key === "password") continue;
            setCookie(key, value, 1);
          }

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
