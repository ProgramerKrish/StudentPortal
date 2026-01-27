import {  useReducer } from "react";
export default function AuthReducer(state,action){
    switch(action.type){
        case ("LOGIN"):{
            return {isAuthenticated:true}
        }
        case ("LOGOUT"):{
            return {isAuthenticated:false}
        }
        default:{
            return state
        }
    }
}

