import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Features/posts/postSlice";
import usersReducer from "../Features/users/usersSlice";

export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: usersReducer,
    }
});