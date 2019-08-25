import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-add-shopping-item',
  templateUrl: './add-shopping-item.page.html',
  styleUrls: ['./add-shopping-item.page.scss'],
})
export class AddShoppingItemPage implements OnInit {

  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined
  };

  constructor(
    private shopping: ShoppingListService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
  };

  addItem() {
    this.shopping.addItem(this.item).then(ref => {
      this.toast.show(`${this.item.name} added! 😁`);
      this.router.navigate(['/home', {ref: ref}]);
    });
  };
}
