import { USER } from "../../constants/user";
import axios from "axios";

export const userAction = (search) => {
  console.log(search, "<=action fun");
  return (dispatch) => {
    axios
      .get(
        `https://backend.squarepro.net/v1/city?page=1&limit=10000${
          search == null ? "" : `&search=${search}`
        }`
      )
      .then((res) => dispatch({ type: USER, payload: res }))
      .catch((err) => {
        console.log('err',err);
      });
  };
};

// import { USER } from "../../constants/user";
// import axios from "axios";

// export const userAction = () => {
//   // alert("Hello world");
//   return (dispatch) => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts`)
//       .then((res) => dispatch({ type: USER, payload: res }))
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
