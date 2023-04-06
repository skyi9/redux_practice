// getPosts  = () => async (dispatch , getState)=> {   }
/*
const normal = (value)=>{
    return { type : 'INCREASE' , payload : value };
}
// kyuki redux kehta hai ki mujhe mujhe async await nahi ata , iske liye apan thunk use karte hai
// redux-thunk kehta hai ki tum normal object(Action) mat return karo bulki ek async function return karto aur us async function mein  tum return statement mat liko balki mere dwara diya gaya dispatch function call karo
syntax : const getUser = () => {
    return async function(dipatch , getState){
        dispatch({ type : 'INCREASE', poyalod : '' })
    }
}
// example
// REQUEST , SUCCESS and FAIL
syntax  : const getPost = ()=> async (dispatch , getState)=>{
    try{
    let action = { type : '' , paylaod : '' }
    action.type = REQUEST
    dipatch(action); --> { loading=true , data , error }
    const { data } = await axios.get(url);
    action.type = SUCCESS
    payload = data
    dipatch(action) --> {laoding = false , data=data , error = null}
    }catch(err){
        const action = { type ; FAIL , payload : err }
        dispatch(action) ---> { loading=false , data , error=err }
    }
}
action = { type:'' , payalod : '' } // apna action humesha esa dikhega
dipatch(action)------>saare reducer----> reducer(state , action) ---> reducer state mein change karega

// apna reducer esa dikhega
const reducer = (state= { loading :false , data = null , error = null }, action){
    switch(action.type){
        case REQUEST : return {  laoding : true , data=null , error=null };
        case SUCCESS : return { laoding : false, data : action.payload , error=null };
        case FAIL : return { loading : false, data =null ,error: action.payload  }
    }
}
*/
//  const store = getState();

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