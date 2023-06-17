import { LOAD_ENTRY, LOAD_LIST } from "../types";
import { getAll, save, deleteEntity } from "../../services/employeeService";

export const loadEntryAction = (entity) => (dispatch, getState) => {
  dispatch({
    type: LOAD_ENTRY,
    payload: entity,
  });
};
export const loadListAction = () => async (dispatch, getState) => {
    const list = await getAll();
    dispatch({
      type: LOAD_LIST,
      payload: list,
    });
};

export const saveEntryAction = (entity) => async (dispatch, getState) => {
    const entity1 = await save(entity);
    const list = await getAll();
    dispatch({
      type: LOAD_LIST,
      payload: list,
    });
};

export const deleteEntryAction = (id) => async (dispatch, getState) => {
    const entity1 = await deleteEntity(id);
    const list = await getAll();
    dispatch({
      type: LOAD_LIST,
      payload: list,
    });
};