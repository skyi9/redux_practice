import axios from "axios"
import { GETPOSTFAIL, GETPOSTREQ, GETPOSTSUCCESS, ADDPOSTREQ, ADDPOSTSUCCESS, ADDPOSTFAIL , MERGEPOST } from "../constants/counter"

export const getPosts = () => {
    return async (dispatch) => {
        try {
            const action = { type: "", payload: "" }
            action.type = GETPOSTREQ
            dispatch(action)
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
            action.type = GETPOSTSUCCESS
            action.payload = data
            dispatch(action)
        } catch (error) {
            const action = { type: "", payload: "" }
            action.type = GETPOSTFAIL
            action.payload = error
            dispatch(action)
        }
    }
}

export const addPost = (title,body,userId) => {
    return async (dispatch) => {
        try {
            const action = { type: "", payload:"" }
            action.type = ADDPOSTREQ
            dispatch(action)
            const config  = {
                headers: {
                    'Content-Type': 'application/json'
                },        
            }
            const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts", {title,body,userId}, 
            config
            );
            action.type = ADDPOSTSUCCESS
            action.payload = data
            dispatch(mergePost(data))
            dispatch(action)
        } catch (error) {
            const action = { type: "", payload: "" }
            action.type = ADDPOSTFAIL
            action.payload = error
            dispatch(action)
        }
    }
}

export const mergePost = (newPost) => {
    return  { type : MERGEPOST , payload : newPost  };
}