import {Action} from '@ngrx/store'
import { error } from 'protractor'
import { ShoppingItem } from '../models/shopping-item.model'

export enum ShoppingActionTypes {
    GET_ITEMS = '[SHOPPING] Get Items',
    GET_ITEMS_SUCCESS = '[SHOPPING] Get Items Success',
    GET_ITEMS_FAILURE = '[SHOPPING] Get Items Failure',
    ADD_ITEM = '[SHOPPING] Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
    DELETE_ITEM = '[SHOPPING] Delete Item',
    DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
    DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
    REVERSE_ITEMS = '[SHOPPING] Reverse Items',
    DUPLICATE_ITEMS = '[SHOPPING] Duplicate Items',
}

//GET ITEMS

export class GetItemsAction implements Action {
    readonly type = ShoppingActionTypes.GET_ITEMS
}

export class GetItemsSuccessAction implements Action {
    readonly type = ShoppingActionTypes.GET_ITEMS_SUCCESS

    constructor(public payload: ShoppingItem[]) {}
}

export class GetItemsFailureAction implements Action {
    readonly type = ShoppingActionTypes.GET_ITEMS_FAILURE

    constructor(public payload: Error) {}
}

//ADD ITEM

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM

    constructor(public payload: ShoppingItem) {}
}

export class AddItemActionSuccess implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS

    constructor(public payload: ShoppingItem) {}
}

export class AddItemActionFailure implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE

    constructor(public payload: Error) {}
}

//DELETE ITEM

export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM

    constructor(public payload: string) {}
}

export class DeleteItemActionSuccess implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS

    constructor(public payload: string){}
}

export class DeleteItemActionFailure implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE

    constructor(public payload: Error){}
}

//OTHER

export class ReverseItemsAction implements Action {
    readonly type = ShoppingActionTypes.REVERSE_ITEMS
}

export class DuplicateItemsAction implements Action {
    readonly type = ShoppingActionTypes.DUPLICATE_ITEMS
}

//EXPORTING

export type ShoppingAction = 
GetItemsAction | 
AddItemAction | 
DeleteItemAction | 
ReverseItemsAction | 
DuplicateItemsAction | 
GetItemsSuccessAction | 
GetItemsFailureAction |
AddItemActionSuccess |
AddItemActionFailure |
DeleteItemActionSuccess |
DeleteItemActionFailure