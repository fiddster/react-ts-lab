import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

const Logger: Middleware =
    (api: MiddlewareAPI) =>
    (next: Dispatch) =>
    async (action: AnyAction) => {
        if(process.env.NODE_ENV === "development"){
            console.log("next.name: " + next.name)
        }
        return next(action);
    };

export const loggingMw = [Logger]