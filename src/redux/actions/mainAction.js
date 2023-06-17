import { ACTIVATE_EMPLOYEE, ACTIVATE_ORGANIZATION } from "../types";
export const activateEmployee = () => (dispatch, getState) => {
  dispatch({
    type: ACTIVATE_EMPLOYEE,
    payload: {},
  });
};

export const activateOrganization = () => (dispatch, getState) => {
  dispatch({
    type: ACTIVATE_ORGANIZATION,
    payload: {},
  });
};
