import { DuplicateItemsAction, ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";
import { ShoppingItem } from "../models/shopping-item.model"

const initialState: Array<ShoppingItem> = [
    {
        id: '123124',
        name: 'Diet coke',
    },
    {
        id: '1231245',
        name: 'Pepsi',
    },
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action:
    ShoppingAction){
        switch(action.type){
            case ShoppingActionTypes.GET_ITEMS:
                return state
            case ShoppingActionTypes.DUPLICATE_ITEMS:
                return state = [...state, ...state]
            case ShoppingActionTypes.REVERSE_ITEMS:
                return state = state.slice().reverse()
            case ShoppingActionTypes.DELETE_ITEM:
                console.log(action.type, action.payload)
                return state.filter(item => item.id !== action.payload)
            case ShoppingActionTypes.ADD_ITEM:
                console.log(action.type, action.payload)
                return [...state, action.payload]
            default:
                return state;
        }
    }