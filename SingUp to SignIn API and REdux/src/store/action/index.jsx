const signInFormAction = (data) => {
    console.log("data=>", data);
return(dispatch) => 
      fetch('https://backend.squarepro.net/v1/auth/user/signup', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        // .then((response) => response.json())
        .then((response) => response.json())
        // .then((json)=>console.log('json',json))  
        .then((json) => dispatch({ type: "SETSIGNUP", payload: json.data }));
    };


const logInFun = (data) => {
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
        // Displaying results to console
        // .then((json) => dispatch({ type: "SETDATA", payload: json.response[0].token}));
        // .then((json) => console.log(json));
        .then((json) =>{ 
          localStorage.setItem("token",json.data.token)
          dispatch({ type: "SETDATA", payload: json })
        })
    };
  };
  export {signInFormAction, logInFun }










// const logInFun = (data) => {
//     return (dispatch) =>
//     dispatch({type:"SETDATA",payload:data})
// }
//   export { logInFun };

    

 // const logInFun = (data) => {
    //   return (dispatch) => {
    //     console.log("data=>", data);
    //     //  main.js
    
    //     // POST request using fetch()
    //     fetch("https://jsonplaceholder.typicode.com/login", {
    //       // Adding method type
    //       method: "POST",
    
    //       // Adding body or contents to send
    //       body: JSON.stringify(data),
    
    //       // Adding headers to the request
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     })
    //       // Converting to JSON
    //       .then((response) => response.json())
    
    //       // Displaying results to console
    //       // .then((json) => dispatch({ type: "SETDATA", payload: json.response[0].token}));
    //       .then((json) => {
    //       if(json.httpstatus == 200){
    //         dispatch({ type: "SETDATA", payload: json.response })
    //       }else if(json.httpstatus == 404){
    //         dispatch({ type: "SETERROR", payload: json.message })

    //       }
    //     }
    //       )
       
    //   };
    // };
    // export { logInFun };





    

    // const logInFun = (data) => {
    //   return (dispatch) => {
    //     console.log("data=>", data);
    //     //  main.js
    
    //     // POST request using fetch()
    //     fetch("https://backendcrm.squarepro.net/CRM/Dashboarduserlogin", {
    //       // Adding method type
    //       method: "POST",
    
    //       // Adding body or contents to send
    //       body: JSON.stringify(data),
    
    //       // Adding headers to the request
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8",
    //       },
    //     })
    //       // Converting to JSON
    //       .then((response) => response.json())
    
    //       // Displaying results to console
    //       // .then((json) => dispatch({ type: "SETDATA", payload: json.response[0].token}));
    //       .then((json) => {
    //       if(json.httpstatus == 200){
    //         dispatch({ type: "SETDATA", payload: json.response })
    //       }else if(json.httpstatus == 404){
    //         dispatch({ type: "SETERROR", payload: json.message })

    //       }
    //     }
    //       )
       
    //   };
    // };
    // export { logInFun };

