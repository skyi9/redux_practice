import { GETPOSTREQ, GETPOSTSUCCESS, GETPOSTFAIL, ADDPOSTREQ, ADDPOSTSUCCESS, ADDPOSTFAIL , MERGEPOST , ADDPOSTRESET} from '../constants/counter'
export const get_reducer = (getState = { data: [], loading: false, error: null }, action) => {
    switch (action.type) {
        case GETPOSTREQ:
            return {
                loading: true
            }
        case GETPOSTSUCCESS:
            return {
                loading: false,
                data: action.payload.slice(0,11)
            }
        case GETPOSTFAIL:
            return {
                loading: false,
                error: action.payload
            }
        case MERGEPOST:
            return { ...getState , data : [...getState.data , action.payload] }
        default:
            return getState
    }
}
export const post_reducer = (postState = {data:[] , loading:false , error:null} , action)=> {
    switch(action.type){
        case ADDPOSTREQ:
            return {
                loading: true
            }
        case ADDPOSTSUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case ADDPOSTFAIL:
            return {
                loading: false,
                data: action.payload
            }
        case ADDPOSTRESET :
            return { data:[] , loading:false , error:null }
        default:
            return postState
    }
}
