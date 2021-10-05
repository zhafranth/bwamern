import { FETCH_PAGE } from "../types";
import axios from "axios";

export const fetchPage = (url, page) => (dispatch) => {
  return axios.get(url).then((res) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: res.data,
      },
    });
  });
};
