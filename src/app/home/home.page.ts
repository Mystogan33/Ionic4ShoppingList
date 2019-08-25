import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../../models/item/item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  shoppingList$ : Observable<Item[]>;

  constructor
  (
    private route: ActivatedRoute,
    private shopping: ShoppingListService,
    private router: Router
  ) {
    this.shoppingList$ = this.shopping
    .getShoppingList()
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }));
      })
    )
  };

  editItem(item) {

    let navigationExtras: NavigationExtras = {
      state: { item: item }
    };

    this.router.navigate(['/edit-shopping-item'], navigationExtras);
  }
}
