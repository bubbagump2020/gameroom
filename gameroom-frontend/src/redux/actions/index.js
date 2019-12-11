import {
    USER_ID
} from '../action-types/index'

export const storeUserId = (payload) => {
    return { type: USER_ID, payload }
}