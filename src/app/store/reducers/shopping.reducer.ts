import { DuplicateItemsAction, ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model"

export interface ShoppingState {
    list: ShoppingItem [],
    loading: boolean,
    error: Error
}

const initialState: ShoppingState = {
    list: [],
    loading: false,
    error: undefined
}

export function ShoppingReducer(state: ShoppingState = initialState, action:
    ShoppingAction){
        switch(action.type){
            case ShoppingActionTypes.GET_ITEMS:
                return {
                    ...state, 
                    loading: true
                }
            case ShoppingActionTypes.GET_ITEMS_SUCCESS:
                return {
                    ...state,
                    list: action.payload,
                    loading: false
                }
            case ShoppingActionTypes.GET_ITEMS_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }       
            case ShoppingActionTypes.ADD_ITEM:
                return {
                    ...state,
                    loading: true
                }
            case ShoppingActionTypes.ADD_ITEM_SUCCESS:
                return {
                    ...state,
                    list: [...state.list, action.payload],
                    loading: false
                }
            case ShoppingActionTypes.ADD_ITEM_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            case ShoppingActionTypes.DELETE_ITEM:
                return {
                    ...state,
                    loading: true
                }
            case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
                return {
                    ...state,
                    list: state.list.filter(item => item.id !== action.payload),
                    loading: false
                }
            case ShoppingActionTypes.DELETE_ITEM_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }   
            case ShoppingActionTypes.DUPLICATE_ITEMS:
                return state.list = [...state.list, ...state.list]
            case ShoppingActionTypes.REVERSE_ITEMS:
                return state.list = state.list.slice().reverse()    
            default:
                return state;
        }
    }