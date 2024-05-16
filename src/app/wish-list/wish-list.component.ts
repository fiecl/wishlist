import { Component, OnInit, Input } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {

  constructor() {}

  ngOnInit(): void {

  }

  // Need the @Input() decorator to remove the error in <wish-list [wishes]="visibleItems"></wish-list>. Import it first!
  @Input() wishes: WishItem[] = [];

  toggleItem(item: WishItem) : void {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
