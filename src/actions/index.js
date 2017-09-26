export const CORRECT_USER = "CORRECT_USER";
export const CHANGE_SORTING = "CHANGE_SORTING";

export const correctUser = (user) => ({
    type: CORRECT_USER,
    user,
});

export const changeSorting = (sortName, sortOrder) => ({
    type: CHANGE_SORTING,
    sortName,
    sortOrder,
});