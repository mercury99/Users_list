import { CORRECT_USER } from "../actions";

const usersList = (state = [], action) => {
    switch (action.type) {
        case CORRECT_USER: {
            const {registered_on} = action.user;

            if (!state.some((user) => user.registered_on === registered_on)) {
                return [
                    ...state,
                    action.user,
                ]
            } else {
                return state.map((user) => {
                    if (user.registered_on !== registered_on) {
                        return user
                    } else {
                        return {
                            ...user,
                            ...action.user
                        }
                    }
                })
            }
        }

        default: {
            return state;
        }
    }
};

export default usersList;