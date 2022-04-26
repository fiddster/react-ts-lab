import { Url } from "url";

export enum ApiMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

export const ApiAction  = {
    request:'[app] API Request'
}

export interface ApiRequest {
    
}

export const apiRequest = (method: ApiMethod, url: Url, body: JSON, onSuccess: string, onError: string) => ({
    type: ApiAction.request,
    payload: body,
    meta: { method, url, onSuccess, onError },
    uiStatus: "loading"
});