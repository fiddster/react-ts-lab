import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DocumentsReducerState {
    items: any[]
}

const initialState: DocumentsReducerState = {
    items: []
}

export const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        setItems: (state, action:PayloadAction<{newItems:any[]}>) => {
            state.items = action.payload.newItems
        },
    },
})

export const { setItems} = documentsSlice.actions

export default documentsSlice.reducer