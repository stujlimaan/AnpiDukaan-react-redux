import {Actiontypes} from "../Constant/actiontype"

export const setProducts=(products)=>{
    return {
        type:Actiontypes.SET_PRODUCTS,
        payload:products

    }
}

export const selectedProducts=(products)=>{
    return {
        type:Actiontypes.SELECTED_PRODUCTS,
        payload:products

    }
}
export const removeselectedProducts=(products)=>{
    return {
        type:Actiontypes.REMOVE_SELECTED_PRODUCTS,

    }
}

