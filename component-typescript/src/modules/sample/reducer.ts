import Actions ,{types} from "./action";

export interface SamplesState {
    name: string,
}
const initialState: SamplesState = {
    name: 'click',
}

const reducer = (state = initialState, action: Actions): SamplesState=> {
    const newState = {...state};
    switch (action.type) {
    case types.SET_NAME:
        newState.name = action.payload;
        return newState;
    default:
        return state
    }
}
export default reducer;

