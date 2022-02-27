import { actionTypes } from "../actionTypes";
import axios from "axios";
import { baseURL } from "../../api/baseURL";

export const getMobiles = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${baseURL}/api/v1/mobiles/getallpaginatedmobiles`,
      {
        params: {
          page,
        },
      }
    );
    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};

export const getSingleMobile = (value) => (dispatch) => {
  dispatch({
    type: actionTypes.GET_SINGLE_MOBILE,
    payload: value,
  });
};

export const getMobileById = (value) => async (dispatch) => {
  const res = await axios.get(`${baseURL}/api/v1/mobiles/getsinglemobile`, {
    params: {
      detailId: `${value}`,
    },
  });
  dispatch({
    type: actionTypes.GET_MOBILE_BY_ID,
    payload: res.data.data,
  });
};

export const postReview = (value) => async (dispatch) => {
  const res = await axios.patch(`${baseURL}/api/v1/mobiles/addReviews`, {
    value,
  });
};

export const isFilterMobile = (value) => (dispatch) => {
  console.log("isFilter===>", value);
  dispatch({
    type: actionTypes.IS_FILTER,
    payload: value,
  });
};
export const getMobilesByPrice = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyprice`, {
      params: {
        page,
        lP: values.lP,
        uP: values.uP,
      },
    });
    console.log("Get mobile===>", res.data);
    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
    } else {
      console.log("Sever error");
      dispatch({
        type: actionTypes.MORE_MOBILES,
        payload: res.data.success,
      });
      alert(res.data.data);
    }
  };
};
