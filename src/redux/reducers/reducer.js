import { GETPOSTREQ, GETPOSTSUCCESS, GETPOSTFAIL } from '../constants/counter'
export const api_reducer = (apiState = { data: [], loading:false, error:null }, action) => {
    switch (action.type) {
        case GETPOSTREQ:
            return {
                loading:true
            }
        case GETPOSTSUCCESS:
            return {
                loading:false,
                data:action.payload
            }

        case GETPOSTFAIL:
            return {
                loading:false,
                error:action.payload
            }

        default:
            return apiState
    }
}