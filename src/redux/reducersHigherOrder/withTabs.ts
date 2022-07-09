import { AnyAction } from "redux"

export namespace CounterActions {
    const counter = "COUNTER_"
    export const Increment = counter + "INCREMENT"
    export const Decrement = counter + "DECREMENT"
    export const Reset = counter + "RESET"
}

interface CounterInitialState {
    value: number
}

const counterInitialState: CounterInitialState = {
    value: 0
}

export const counterReducer = (state = counterInitialState, action: AnyAction): CounterInitialState => {
    switch (action.type) {
        case CounterActions.Increment:
            return {
                ...state,
                value: state.value + 1

            }
        case CounterActions.Decrement:
            return {
                ...state,
                value: state.value - 1

            }
        case CounterActions.Reset:
            return {
                ...state,
                value: 0
            }

        default:
            return {
                ...state
            }
    }
}

export namespace TabActions {
    const tabs = "TABS_"
    export const AddTab = tabs + "ADD"
    export const RemoveTab = tabs + "REMOVE"
    export const SwitchTab = tabs + "SWITCH"
}

interface WithTabsState<T = any> {
    readonly activeTabId: number,
    readonly tabs: Array<T>,
}

const getInitialState = <T>(): WithTabsState<T> => {
    return {
        activeTabId: 1,
        tabs: new Array<T>()
    }
}

export const withTabs = <T>(reducer: (state: T, action: AnyAction) => T) => (state = getInitialState<T>(), action: AnyAction): WithTabsState<T> => {
    switch (action.type) {
        case "@@INIT": {
            return {
                ...state
            }
        }
        case TabActions.AddTab:
            return {
                ...state
            }

        case TabActions.RemoveTab:
            return {
                ...state
            }
        case TabActions.SwitchTab:
            return {
                ...state,
                activeTabId: action.payload
            }
        default:
            let tabId = state.activeTabId
            let value = reducer(state.tabs[tabId], action)
            return {
                ...state,
                tabs: state.tabs.map(
                    (tab, index) => index === tabId ? value : tab
                )

            }
    }
}