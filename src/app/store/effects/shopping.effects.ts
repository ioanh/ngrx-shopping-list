import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ShoppingActionTypes, AddItemAction, DeleteItemAction,  GetItemsAction, GetItemsSuccessAction, GetItemsFailureAction, AddItemActionSuccess, AddItemActionFailure, DeleteItemActionSuccess, DeleteItemActionFailure } from '../actions/shopping.actions'
import { of } from 'rxjs';
import { ShoppingService } from 'src/app/shopping.service';

@Injectable()

export class ShoppingEffects {

    loadShopping$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType<GetItemsAction>(ShoppingActionTypes.GET_ITEMS),
            mergeMap(
                () => this.shoppingService.getShoppingItems()
                .pipe(
                    map(data => new GetItemsSuccessAction(data)),
                    catchError(error => of(new GetItemsFailureAction(error)))
                )
            )
        )
    })

    addShoppingItem$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
            mergeMap(
                (data) => this.shoppingService.addShoppingItem(data.payload)
                .pipe(
                    map(() => new AddItemActionSuccess(data.payload)),
                    catchError(error => of(new AddItemActionFailure(error)))
                )
            )
        )
    })

    deleteShoppingItem$ = createEffect(() => {
        return this.actions$
        .pipe(
            ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
            mergeMap(
                (data) => this.shoppingService.deleteShoppingItem(data.payload)
                .pipe(
                    map(() => new DeleteItemActionSuccess(data.payload)),
                    catchError(error => of(new DeleteItemActionFailure(error)))
                )
            )
        )
    })
    
    constructor(private actions$: Actions, private shoppingService: ShoppingService){}
}
