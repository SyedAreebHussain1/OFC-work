const signUpAction = (data) => {
  console.log('dataActionSignUp', data)
  // return (dispatch) => dispatch({type:"SIGNUP",payload:data})
  return (dispatch) =>
    fetch('https://backend.squarepro.net/v1/auth/user/signup', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      // .then((json)=>console.log('json',json))  
      .then((json) => dispatch({ type: "SIGNUP", payload: json }));
}

const logInFun = (data) => {
  console.log('dataActionLogInFun=>', data)
  return (dispatch) => {
    console.log("data=>", data);
    fetch("https://backend.squarepro.net/v1/auth/user/signin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      // .then((json)=>console.log(json))  
      .then((json) => {
        localStorage.setItem("token", json.data.token)
        dispatch({ type: "LOGIN", payload: json })
      })
  };
}

const profileUser = (data) => {
  let token = localStorage.getItem("token")
  return (dispatch) => {
    console.log("data=>", data);
    fetch("https://backend.squarepro.net/v1/profile", {
      method: "GET",  
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `bearer ${token}`
      },

    })
      .then((response) => response.json())  
      // .then((json) => dispatch(json))
      .then((json) => dispatch({ type: "PROFILE", payload: json}));

  };
  }


export { signUpAction, logInFun ,profileUser};