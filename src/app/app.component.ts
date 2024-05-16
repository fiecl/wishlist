import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  listFilter : any = '0';
  newWishText = "";
  renderIfNoItems = 'There are no wishes to display';
  title = 'mywishlist';

  // getter
  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  // visibleItems: WishItem[] = this.items; // copy of items array, but this will contain the filtered items // This was also commented out because of the getter
  
  addNewWish() {
    this.items.push(new WishItem(this.newWishText)); // todo: add wish to items array
    this.newWishText = ""; // clear the textbox
  }

  // THIS WAS COMMENTED OUT TO USE getter 'get' visibleItems() above
  // filterChanged(value: any) {
  //   console.log(value);
  //   if (value === '0') {
  //     this.visibleItems = this.items;
  //   } else if (value === '1') {
  //     this.visibleItems = this.items.filter(item => !item.isComplete);
  //   } else {
  //     this.visibleItems = this.items.filter(item => item.isComplete);
  //   }
  // }


  // toggleItem(e: any): void {
  //   console.log(e);
  // }
}
