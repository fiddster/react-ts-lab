import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import axios from "../../api/main";
import { ApiAction } from "../actions/api";
import { setUiStatusLoading } from "../actions/uiStatus";

// this middleware care only for actions with "withLoading"-prop
const withLoading:Middleware = 
    (api:MiddlewareAPI) => 
    (next:Dispatch) => 
    (action:AnyAction) => {
        if (action?.meta?.withLoading) {
            const {dispatch} = api
            let test = next.name
            dispatch(setUiStatusLoading(action.type))
        }
        return next(action)
    };

const api:Middleware = 
(api:MiddlewareAPI) => 
(next:Dispatch) => 
async (action:AnyAction) => {
    if(action.type === ApiAction.request) {
        const { method, url, onSuccess, onError } = action.meta;
        const {dispatch} = api;

        try {
            const response = await axios.request({
                method: method,
                url:url,
                data:action.payload
            })
            // TODO - handle success
            
        } catch (error) {
            // TODO - handle error
        }
        

        fetch(url, { method }).then(response => response.json())
          .then((data) => dispatch({ type: onSuccess, payload: data }))
          .catch(error => dispatch({ type: onError, payload: error }))

    }
    return next(action)
};

// TODO export and import in createStore