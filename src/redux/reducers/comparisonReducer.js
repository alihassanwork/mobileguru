import { actionTypes } from "../actionTypes";

const initialState = {
  firstMobile: {},
  secondMobile: {},
};

const comparisonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FIRST_MOBILE: {
      return {
        ...state,
        firstMobile: action.payload,
      };
    }
    case actionTypes.SECOND_MOBILE: {
      return {
        ...state,
        secondMobile: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default comparisonReducer;
