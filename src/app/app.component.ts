import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemAction, DeleteItemAction, DuplicateItemsAction, ReverseItemsAction, ShoppingActionTypes } from './store/actions/shopping.actions';
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
  newShoppingItem: ShoppingItem = {id: '', name: ''}

  ngOnInit(){
    this.shoppingItems$ = this.store.select(store => store.shopping.list)
    this.store.dispatch(new AddItemAction({id: '123', name: 'Dr. Pepper'}))
  }

  constructor(private store: Store<AppState>) {}

  addItem(itemName){
    this.newShoppingItem.id = uuid();
    this.newShoppingItem.name = itemName
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
