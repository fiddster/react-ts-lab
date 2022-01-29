import { Url } from "url";

export enum ApiMethod{
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete ="DELETE",
}

export namespace ApiAction{
    export const request = '[app] API Request';
}

export interface ApiRequest{
  
}

export const apiRequest = (method:ApiMethod, url:Url, body:JSON, onSuccess:string, onError:string) => ({
  type:ApiAction.request,
  payload: body,
  meta: { method, url, onSuccess, onError },
  uiStatus:"loading"
});