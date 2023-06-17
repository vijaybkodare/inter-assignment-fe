import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {EmployeeReducer} from "../reducers/employeeReducer";
import {OrganizationReducer} from "../reducers/organizationReducer";

const initialState = {};
const reducers = combineReducers({
  employeeReducer: EmployeeReducer,
  organizationReducer: OrganizationReducer,
});
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
