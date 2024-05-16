import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

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
  
  renderIfNoItems = 'There are no wishes to display';

  filter: any = () => {}; // IMPORTANT: I JUST USED THIS TO REMOVE THE ERROR THAT I'M ENCOUNTERING WHEN USING ONLY 'filter: any;'
  // filter: any; // IMPORTANT: THIS IS USED IN THE YOUTUBE TUTORIAL, BUT THE CONSOLE IN THE ANGULAR APP PRODUCES ERROR, ALTHOUGH THE APP IS STILL FULLY FUNCTIONAL
  
  // // getter
  // get visibleItems() : WishItem[] {
  //   return this.items.filter(this.filter);
  // }

  // visibleItems: WishItem[] = this.items; // copy of items array, but this will contain the filtered items // This was also commented out because of the getter
  
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
