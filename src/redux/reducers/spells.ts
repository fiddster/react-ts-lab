import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Spell } from "../../api/services/SpellService"

interface SpellsReducerState {
    all: Spell[],
    filteredSpells: Spell[]
}

const initialState: SpellsReducerState = {
    all: new Array<Spell>(),
    filteredSpells: new Array<Spell>()
}

export const spellsSlice = createSlice({
    name: 'spells',
    initialState,
    reducers: {
        setAllSpells: (state = initialState, action: PayloadAction<Spell[]>) => {
            state.all = action.payload
        },
        setFilteredSpells: (state = initialState, action: PayloadAction<Spell[]>) => {
            state.filteredSpells = action.payload
        },
    },
})

export const SpellActions = { ...spellsSlice.actions }

export default spellsSlice.reducer