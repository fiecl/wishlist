import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from './../shared/services/EventService'; // PART OF THE EVENT BUS
import { WishService } from './wish.service';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  items: WishItem[] = [];

  // PART OF 4.1 Using Observables to Create an Event Bus
  // Basically, the codes here are those that we will want for listening for that events
  // NOTE: We don't need to use 'private' since we don't need to create a property since we're using events inside the constructor
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish: any) => {
      // todo: remove wish from items
      console.log(wish);
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe(
      (data: any) => {
        this.items = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

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
