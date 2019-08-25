import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-edit-shopping-item',
  templateUrl: './edit-shopping-item.page.html',
  styleUrls: ['./edit-shopping-item.page.scss'],
})
export class EditShoppingItemPage implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute,
    private shopping: ShoppingListService,
    private router: Router,
    private toast: ToastService
  ) {
    this.route.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.item;
      }
    });
  }

  ngOnInit() {}

  editItem() {
    this.shopping.editItem(this.item).then(() => {
      this.toast.show(`${this.item.name} saved! 😀`);
      this.router.navigate(['/home']);
    });
  }

  removeItem() {
    this.shopping.removeItem(this.item).then(() => {
      this.toast.show(`${this.item.name} has been removed! 😱`);
      this.router.navigate(['/home']);
    })
  }

}
