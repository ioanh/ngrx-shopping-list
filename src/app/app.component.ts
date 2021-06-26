import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction, DuplicateItemsAction, GetItemsAction, ReverseItemsAction, ShoppingActionTypes } from './store/actions/shopping.actions';
import { AppState } from './store/models/app-sate.model';
import { ShoppingItem } from './store/models/shopping-item.model';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  shoppingItems$: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>
  error$: Observable<Error>
  newShoppingItem: ShoppingItem = {id: '', name: ''}

  ngOnInit(){
    this.shoppingItems$ = this.store.select(store => store.shopping.list)
    this.loading$ = this.store.select(store => store.shopping.loading)
    this.error$ = this.store.select(store => store.shopping.error)

    this.store.dispatch(new GetItemsAction());
  }

  constructor(private store: Store<AppState>) {}

  addItem(){
    this.newShoppingItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newShoppingItem))
    this.newShoppingItem = {id: '', name: ''}
  }

  deleteItem(itemID){
    this.store.dispatch(new DeleteItemAction(itemID))
  }

  reverseList(){
    this.store.dispatch(new ReverseItemsAction())
  }

  duplicateList(){
    this.store.dispatch(new DuplicateItemsAction())
  }
}
