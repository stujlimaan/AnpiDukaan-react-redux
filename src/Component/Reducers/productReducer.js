import { Actiontypes } from "../Constant/actiontype"
const initialState={
    products:[]
}
export const productReducer=(state=initialState,{type,payload})=>{
        switch(type){
            case Actiontypes.SET_PRODUCTS:
            return {...state,products:payload};
            default: return state
        }
}   



export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case Actiontypes.SELECTED_PRODUCTS:
            return {...state,...payload};
            default: return state  
    }
}