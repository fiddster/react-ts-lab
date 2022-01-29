
export namespace UiStatusActionTypes {
    export const loading = "[UiStatus] loading";
    export const success = "[UiStatus] success";
    export const fail = "[UiStatus] fail";
}

export const setUiStatusLoading = (key: string) => {
    return {
        type: UiStatusActionTypes.loading,
        key:key
    }
}
export const setUiStatusSuccess = (key: string) => {
    return {
        type: UiStatusActionTypes.success,
        key:key
    }
}
export const setUiStatusFail = (key: string) => {
    return {
        type: UiStatusActionTypes.fail,
        key:key
    }
}