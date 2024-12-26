import { SET_PRODUCT } from "../../constants/actionTypes";
const setProducts=(product)=>{
    return{
        type:SET_PRODUCT,
        payload:product
    }
}
export{setProducts}