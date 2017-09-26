import { CHANGE_SORTING } from "../actions";

const table = (state = {sortName: [], sortOrder: []}, action) => {
    switch (action.type) {
        case CHANGE_SORTING: {
            const {sortName, sortOrder} = action;

            return {
                sortName: [sortName],
                sortOrder: [sortOrder],
            }
        }

        default: {
            return state;
        }
    }
};

export default table;