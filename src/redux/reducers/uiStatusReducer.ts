import { UiStatusActionTypes } from "../actionTypes/uiStatus"
import { AnyAction, createAction } from "@reduxjs/toolkit"

interface UiStatusItem {
    key: string
    loading: boolean
    result: undefined | boolean
}

interface UiStatusReducerState {
    items: UiStatusItem[]
}

const initialState: UiStatusReducerState = {
    items: new Array<UiStatusItem>()
}

export namespace UiStatusActions {
    const loading = createAction<{ key: string }>(UiStatusActionTypes.loading)
    const success = createAction<{ key: string }>(UiStatusActionTypes.success)
    const fail = createAction<{ key: string }>(UiStatusActionTypes.fail)
}

export const uiStatusReducer = (state = initialState, action: AnyAction): UiStatusReducerState => {
    switch (action.type) {
        case UiStatusActionTypes.loading: {
            return {
                ...state,
                items: addOrUpdate(state.items, {key:action.key, loading:true, result:undefined})
            }
        }
        case UiStatusActionTypes.success: {
            return {
                ...state,
                items: addOrUpdate(state.items, {key:action.key, loading:false, result:true})
            }
        }
        case UiStatusActionTypes.fail: {
            return {
                ...state,
                items: addOrUpdate(state.items, {key:action.key, loading:false, result:false})
            }
        }
        default: {
            return state
        }
    }
}

function addOrUpdate(items: Array<UiStatusItem>, item: UiStatusItem): Array<UiStatusItem> {

    var foundItem = items.find(i => i.key === item.key)

    if (foundItem) {

        return items.map(usi => {
            if(usi.key === item.key){
                return item
            }
            return usi
        })
    
    }else {
        return [...items, item]
    }

}