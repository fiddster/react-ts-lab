import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface DocumentsReducerState {
    items: any[]
}

const initialState: DocumentsReducerState = {
    items: new Array()
}

export const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        setItems: (state = initialState, action: PayloadAction<{ newItems: any[] }>) => {
            state.items = action.payload.newItems
        },
    },
})

export const { setItems } = documentsSlice.actions

export default documentsSlice.reducer