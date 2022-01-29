import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { cloneDeep } from "lodash"
import { DictionaryActionTypes } from "../actions/dictionary"

interface Dictionary{
    [key:string]: any
}

interface DictionaryReducerState {
    items: Dictionary
}

const initialState: DictionaryReducerState = {
    items: {}
}

export const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        
        setKeyValue: (state, action:PayloadAction<{key:string, value:any}>) => {
            let {key, value} = action.payload
            state.items[key] = value
        },
        removeKeyValue: (state, action: PayloadAction<{key:string}>) => {
            let copy = cloneDeep(state.items)
            delete copy[action.payload.key]
            state.items = copy
        }
    },
})

export const { setKeyValue, removeKeyValue } = dictionarySlice.actions

export default dictionarySlice.reducer