import {ActionType, TOGGLE_COLLAPSED} from "./UnControlledAccordion";



export const reducer = (state: boolean, action: ActionType) => {
    // console.log('reducer start: ')
    // console.log(state)
    // console.log(action)
    // console.log('reducer end: ')
    // action description
    // debugger;
    switch (action.type) {
        case TOGGLE_COLLAPSED :
            return !state
        default :
            throw new Error('Bad action type')
        // return state
    }
    return state
}