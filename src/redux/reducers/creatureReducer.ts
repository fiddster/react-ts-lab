import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPartyBarItem } from '../../components/PartyBar/PartyBarInterfaces'
import cloneDeep from 'lodash/cloneDeep';

// Define a type for the slice state
interface ICreatureReducerState {
    creatures: IPartyBarItem[]
}

// Define the initial state using that type
const initialState: ICreatureReducerState = {
    creatures: []
}

export const counterSlice = createSlice({
    name: 'creatures',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        setCreatures: (state, action: PayloadAction<IPartyBarItem[]>) => {
            state.creatures = action.payload
        },
        addCreature: (state, action:PayloadAction<IPartyBarItem>) => {
            state.creatures = [...state.creatures, action.payload]
        },
        updateCreature: (state, action:PayloadAction<IPartyBarItem>) => {
            state.creatures = UpdateCreature(state.creatures, action.payload)
        },
        removeCreature: (state, action: PayloadAction<IPartyBarItem>) => {
            state.creatures = state.creatures.filter(c => c === action.payload)
        },
        clearCreatures: (state) => {
            state.creatures = new Array<IPartyBarItem>()
        },
    },
})

function UpdateCreature(creatures:IPartyBarItem[], partyBarItem:IPartyBarItem):IPartyBarItem[]{

    let clones = cloneDeep(creatures)

    for(let c of clones){
        if(c.name === partyBarItem.name){
            c = partyBarItem
            break
        }

    }
    return clones
}

export const { setCreatures, updateCreature, removeCreature, clearCreatures } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer