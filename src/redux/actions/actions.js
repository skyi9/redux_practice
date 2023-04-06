import axios from "axios"
import { GETPOSTFAIL, GETPOSTREQ, GETPOSTSUCCESS } from "../constants/counter"

export const getPosts = ()=> {
    return async(dispatch )=> {
        try {
            const action = {type:"",payload:""}
            action.type = GETPOSTREQ
            dispatch(action)
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts/")
            action.type = GETPOSTSUCCESS
            action.payload = data.slice(0,21)
            dispatch(action)
        } catch (error) {
            const action = {type:"",payload:""}
            action.type = GETPOSTFAIL
            action.payload = err
            dispatch(action)
        }
    }
}