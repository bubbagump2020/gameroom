import * as actions from '../../action-types'

const initialState = {}

function rootReducer(state = initialState, action) {
    if(action.type === actions.USER_ID){
        return{
            ...state,
            state: action.payload
        }
    }
    return state
}

export default rootReducer