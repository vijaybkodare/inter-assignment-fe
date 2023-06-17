import { LOAD_ENTRY, LOAD_LIST, SAVE } from "../types";

const INITIAL_STATE = {
    entity: {},
    list: []
};

export const EmployeeReducer = (state = INITIAL_STATE, action) => {
    console.log('action:',action);
    switch (action.type) {
        case LOAD_ENTRY:
            return {
                ...state,
                entity: action.payload,
            };
        case LOAD_LIST:
            return {
                ...state,
                entity: {name:'', address:''},
                list: action.payload,
            };
        default:
            return INITIAL_STATE;
    }
};


