import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import cloneDeep from 'lodash/cloneDeep';

// Define a type for the slice state
export interface ICreatureReducerState {
    creatures: IPartyBarItem[]
}

// Define the initial state using that type
const initialState: ICreatureReducerState = {
    creatures: new Array<IPartyBarItem>()
}

export const encounterSlice = createSlice({
    name: 'encounter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        setCreatures: (state = initialState, action: PayloadAction<IPartyBarItem[]>) => {
            state.creatures = action.payload
        },
        addCreature: (state = initialState, action: PayloadAction<IPartyBarItem>) => {
            state.creatures = [...state.creatures, action.payload]
        },
        updateCreature: (state = initialState, action: PayloadAction<IPartyBarItem>) => {
            state.creatures = UpdateCreature(state.creatures, action.payload)
        },
        removeCreature: (state = initialState, action: PayloadAction<number>) => {
            state.creatures = state.creatures.filter(c => c.id !== action.payload)
        }
    },
})

function UpdateCreature(creatures: IPartyBarItem[], partyBarItem: IPartyBarItem): IPartyBarItem[] {

    let clones = cloneDeep(creatures)

    for (let c of clones) {
        if (c.id === partyBarItem.id) {
            c = partyBarItem
            break
        }

    }
    return clones
}

export const { setCreatures, addCreature, updateCreature, removeCreature } = encounterSlice.actions

export default encounterSlice.reducer