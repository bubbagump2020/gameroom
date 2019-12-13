import {
    CHARACTER_CLASS,
    CHARACTER_NAME,
    CHARACTER_RACE,
    STRENGTH,
    DEXTERITY,
    CONSTITUTION,
    INTELLIGENCE,
    WISDOM,
    CHARISMA
} from '../action-types/index'

export const characterName = (payload) => {
    return { type: CHARACTER_NAME, payload }
}

export const characterClass = (payload) => {
    return { type: CHARACTER_CLASS, payload }
}

export const characterRace = (payload) => {
    return { type: CHARACTER_RACE, payload }
}

export const strength = (payload) => {
    return { type: STRENGTH, payload }
}

export const dexterity = (payload) => {
    return { type: DEXTERITY, payload }
}

export const constitution = (payload) => {
    return { type: CONSTITUTION, payload }
}

export const intelligence = (payload) => {
    return { type: INTELLIGENCE, payload }
}

export const wisdom = (payload) => {
    return { type: WISDOM, payload }
}

export const charisma = (payload) => {
    return { type: CHARISMA, payload }
}