import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  constructor() {}

  ngOnInit(): void {}

  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = "";
  addNewWish() {
    // This is where we will emit our event
    // this.items.push(new WishItem(this.newWishText)); // todo: add wish to items array
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = ""; // clear the textbox
    
    
  }

}
