import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

const Logger: Middleware =
    (api: MiddlewareAPI) =>
        (next: Dispatch) =>
            async (action: AnyAction) => {
                if (process.env.NODE_ENV === "development") {
                    console.log("loggingMW action.type: " + action.type)
                }
                return next(action);
            };

export const loggingMw = [Logger]