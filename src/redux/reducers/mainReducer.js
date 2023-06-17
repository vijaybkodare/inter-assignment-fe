import { ACTIVATE_EMPLOYEE, ACTIVATE_ORGANIZATION } from "../types";

const INITIAL_STATE = {
  activeForm: "employee",
};

export const MainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIVATE_EMPLOYEE:
      return {
        activeForm: "employee"
      };
    case ACTIVATE_ORGANIZATION:
      return {
        activeForm: "organization"
      };
    default:
      return INITIAL_STATE;
  }
};
