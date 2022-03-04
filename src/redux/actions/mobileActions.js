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

export const getMobilesUnPaginated = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/getallmobiles`);
    if (res.data.success) {
      dispatch({
        type: actionTypes.GET_MOBILES,
        payload: res.data.data,
      });
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
export const getAllPhonesForComparison = () => async (dispatch) => {
  console.log("for comparison");
  const res = await axios.get(`${baseURL}/api/v1/mobiles/compare`);

  dispatch({
    type: actionTypes.GET_ALL_MOBILES_FOR_COMPARISON,
    payload: res.data.data,
  });
};

export const getComparisonMobileById1 = (value) => async (dispatch) => {
  console.log(value);
  const res = await axios.get(`${baseURL}/api/v1/mobiles/getsinglemobile`, {
    params: {
      detailId: `${value}`,
    },
  });
  dispatch({
    type: actionTypes.FIRST_COMPARISON_MOBILE,
    payload: res.data.data,
  });
};
export const getComparisonMobileById2 = (value) => async (dispatch) => {
  console.log(value);
  const res = await axios.get(`${baseURL}/api/v1/mobiles/getsinglemobile`, {
    params: {
      detailId: `${value}`,
    },
  });
  dispatch({
    type: actionTypes.SECOND_COMPARISON_MOBILE,
    payload: res.data.data,
  });
};
export const getUsedMobileById = (value) => async (dispatch) => {
  const res = await axios.get(`${baseURL}/api/v1/mobiles/getoldsinglemobile`, {
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

export const getMobilesByRAM = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyram`, {
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

export const getMobilesByROM = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyrom`, {
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

export const getMobilesBySize = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `${baseURL}/api/v1/mobiles/filterbyscreensize`,
      {
        params: {
          page,
          lP: values.lP,
          uP: values.uP,
        },
      }
    );
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

export const getMobilesByMainCam = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbymaincam`, {
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

export const getMobilesByFrontCam = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyfrontcam`, {
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

export const getMobilesByBattery = (values, page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbybattery`, {
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

export const getMobilesByOS = (values, page) => {
  console.log("OS==>", values);
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbyos`, {
      params: {
        page,
        OS: values.value,
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
export const getMobilesByBrandName = (values, page) => {
  console.log("OS==>", values);
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/mobiles/filterbybrandname`, {
      params: {
        page,
        brandName: values,
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

export const uploadAd = (values, images) => {
  console.log("values==>", values);
  console.log("images==>", images);
  return async (dispatch) => {
    const formData = new FormData();
    for (var i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    try {
      const res = await axios.post(
        `${baseURL}/api/v1/usedmobile/uploadadd`,

        formData,
        {
          params: {
            values,
          },
        },
        {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      if (res.data) {
        alert("save successfully");
      } else {
        alert("system busy please try again later");
      }
      // eslint-disable-next-line no-unreachable
    } catch (error) {
      // Add custom logic to handle errors
    }
  };
};
export const getOldMobiles = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`${baseURL}/api/v1/usedmobile/getusedmobiles`, {
      params: {
        page,
      },
    });
    console.log(res.data);
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
