export const getUsersList = (state) => state.usersList;

export const getInitialStateForm = (state, id) => {
    if (id === "new") {
        return {
            active: true,
        }
    }

    return getUsersList(state).find((user) => user.registered_on === id)
};

export const getSortName = (state) => state.table.sortName;
export const getSortOrder = (state) => state.table.sortOrder;