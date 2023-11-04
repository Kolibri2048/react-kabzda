import {ActionType, TOGGLE_COLLAPSED} from "./UnControlledAccordion";

type StateType = {
    collapsed: boolean
}
// ... : StateType �� ������ ������ ��������� ������ ������ �� ���� ������� � ��� � ������. ��� ��� ��� ������ ��������� ������ �� ������ ��������� ���
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