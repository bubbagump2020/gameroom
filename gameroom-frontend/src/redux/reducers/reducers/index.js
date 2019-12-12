import * as actions from '../../action-types'

const initialState = {
    character: {
        character_name: '',
        character_level: 1,
        character_race: '',
        character_class: '',
        abilityScores: {
            strength: 10,
            dexterity: 10,
            constitution: 10,
            intelligence: 10,
            wisdom: 10,
            charisma: 10
        }
    }
}

function rootReducer(state = initialState, action) {
    if(action.type === actions.CHARACTER_NAME){
        return{
            ...state,
            character:{
                ...state.character,
                character_name: action.payload
            }
        }
    }
    if(action.type === actions.CHARACTER_CLASS){
        return{
            ...state,
            character:{
                ...state.character,
                character_class: action.payload
            }
        }
    }
    if(action.type === actions.CHARACTER_RACE){
        return{
            ...state,
            character: {
                ...state.character,
                character_race: action.payload
            }
        }
    }
    if(action.type === actions.STRENGTH){
        return{
            ...state,
            character: {
                ...state.character,
                abilityScores: {
                    ...state.character.abilityScores,
                    strength: action.payload
                }
            }
        }
    }
    if(action.type === actions.DEXTERITY){
        return{
            ...state,
            character: {
                ...state.character,
                abilityScores: {
                    ...state.character.abilityScores,
                    dexterity: action.payload
                }
            }
        }
    }
    if(action.type === actions.CONSTITUTION){
        return{
            ...state,
            character: {
                ...state.character,
                abilityScores: {
                    ...state.character.abilityScores,
                    constitution: action.payload
                }
            }
        }
    }
    if(action.type === actions.INTELLIGENCE){
        return{
            ...state,
            character: {
                ...state.character,
                abilityScores: {
                    ...state.character.abilityScores,
                    intelligence: action.payload
                }
            }
        }
    }
    if(action.type === actions.WISDOM){
        return{
            ...state,
            character: {
                ...state.character,
                abilityScores: {
                    ...state.character.abilityScores,
                    wisdom: action.payload
                }
            }
        }
    }
    if(action.type === actions.CHARISMA){
        return{
            ...state,
            character: {
                ...state.character,
                abilityScores: {
                    ...state.character.abilityScores,
                    charisma: action.payload
                }
            }
        }
    }
    return state
}

export default rootReducer