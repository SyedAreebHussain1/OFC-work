import { CITYLIST } from "../../constants/cityListConstant";
import { CITYLIST_URL } from "../../constants/cityListConstant";
import axios from "axios";

export const cityListAction = (search) => {
  console.log(search, "<=action fun");
  return (dispatch) => {
    axios
    .get(
        `https://backend.squarepro.net/v1/city?page=1&limit=10000${
          search == null ? "" : `&search=${search}`
        }`
      )
      .then((res) => dispatch({ type: 'CITYLIST', payload: res }))
      .catch((err) => {
        console.log("err", err);
      });
  };
};
