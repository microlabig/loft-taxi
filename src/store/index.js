import { createStore } from "redux";

const initStore = {
    authed: false
}

const rootReducer = (state = initStore, action) => {
    switch (action.type) {
        case "LOGIN":
            return { authed: true };
        case "LOGOUT":
            return { authed: false };
        default:
            return state;
    }
};

export const store = createStore(rootReducer);
