import {Action} from '@ngrx/store'
import { ShoppingItem } from '../models/shopping-item.model'

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    DELETE_ITEM = '[SHOPPING] Delete Item',
    REVERSE_ITEMS = '[SHOPPING] Reverse Items',
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM

    constructor(public payload: ShoppingItem) {}
}

export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM

    constructor(public payload: string) {}
}

export class ReverseItemsAction implements Action {
    readonly type = ShoppingActionTypes.REVERSE_ITEMS
}


export type ShoppingAction = AddItemAction | DeleteItemAction | ReverseItemsAction