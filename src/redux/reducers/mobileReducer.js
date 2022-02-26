import { actionTypes } from "../actionTypes";

const initialState = {
  allMobiles: [],
  singleMobile: {},
  allOldMobiles: [],
  singleOldMobile: {},
  moreMobile: true,
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOBILES: {
      return {
        ...state,
        allMobiles: action.payload,
      };
    }
    case actionTypes.GET_SINGLE_MOBILE: {
      return {
        ...state,
        singleMobile: action.payload,
      };
    }
    case actionTypes.GET_OLD_MOBILES: {
      return {
        ...state,
        allOldMobiles: action.payload,
      };
    }
    case actionTypes.GET_OLD_SINGLE_MOBILE: {
      return {
        ...state,
        singleOldMobile: action.payload,
      };
    }
    case actionTypes.MORE_MOBILES: {
      return {
        ...state,
        moreMobile: action.payload,
      };
    }
    case actionTypes.GET_MOBILE_BY_ID: {
      return {
        ...state,
        singleMobile: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default mobileReducer;
