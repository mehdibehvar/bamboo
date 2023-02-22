import { createContext, useReducer } from "react";
import { getItem } from "../utils/storage.service";

export const store=createContext();
const initialState={
    userInfo:{
        loading:false,
        studentModel:null,
        token:getItem("token")?JSON.parse(getItem("token")):null,
        error:null
    }
};
export const actionType={
    login_request:"LOGIN-REQUEST",
    login_success:"LOGIN-SUCCESS",
    logout_user:"LOGOUT-USER",
    login_error:"LOGIN-ERROR",
    update_userInfo:"UPDATE-USERINFO",
    get_user_info:"GET-USER-INFO",
    register_success:"REGISTER-SUCCESS",
}
const reducer=(state,action)=>{
switch (action.type) {
    case actionType.login_request:
        return{
            ...state,
               userInfo:{
                ...state.userInfo,
                loading:true
               }
        }
    case actionType.login_success:
        return{
            ...state,
               userInfo:{
                ...state.userInfo,
                loading:false,
                token:action.payload.jwtToken
               }
        }
case actionType.login_error:
    return{
        ...state,
        userInfo:{
            ...state.userInfo,
            loading:false,
            error:action.payload
        }
    }
    case actionType.get_user_info:
        return{
            ...state,
               userInfo:{
                ...state.userInfo,
                loading:false,
                studentModel:action.payload
               }
        }
    case actionType.logout_user:
        return{
            ...state,
               userInfo:{
                ...state.userInfo,
                loading:false,
                studentModel:null,
                token:null
               }
        }
    case actionType.register_success:
        return{
            ...state,
               userInfo:{
                ...state.userInfo,
                loading:false,
               }
        }
    default:
        return state;
}
};

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value={state,dispatch}
  return (
    <store.Provider value={value}>
          {children}
    </store.Provider>
  )
};

export default StoreProvider;