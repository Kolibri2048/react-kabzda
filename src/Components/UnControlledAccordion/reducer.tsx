import {ActionType, TOGGLE_COLLAPSED} from "./UnControlledAccordion";

export type StateType = {
    collapsed: boolean
}
// ... : StateType мы всегда должны возращать объект такого же типа который к нам и пришёл. Так как нащ редюсе принимает объект иы должны возращать его
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED :
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default :
            throw new Error('Bad action type')
    }
    return state
}