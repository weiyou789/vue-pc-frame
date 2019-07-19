import {
    USER_INFO
} from './const'

export default {
    [USER_INFO] (state, payload) {
        state.userInfo = payload
    }

}
