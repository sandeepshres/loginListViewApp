import { Component, OnInit } from '@angular/core';
import { IonItemSliding, ToastController } from '@ionic/angular';
import { ItemsproviderService } from '../itemsprovider.service';

@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.page.html',
  styleUrls: ['./listdetail.page.scss'],
})
export class ListdetailPage implements OnInit {
  public items: any[];
  constructor(private alertCtrl: ToastController, private itemService: ItemsproviderService) { }
  ngOnInit() {
    this.itemService.getItems()
      .subscribe(data => this.items = data);
  }

  deleteItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }
}
