import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { EventService } from '../../../shared/services/EventService'; // PART OF THE EVENT BUS

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  // private: To automatically create the property for us, so that we don't have to create the object
  constructor(private events: EventService) {}

  ngOnInit(): void {}

  get cssClasses() {
    // return this.fulfilled ? 'strikeout' : '';
    // return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.wish.isComplete};
  }

  @Input() wish!: WishItem; // !: non-null assertion operator - this wishText property is a non-null property (we're using the bang symbol ! since we know it's going to be supplied by the parent)

  // @Input() wishText! : string;

  // @Input() fulfilled!: boolean;
  // @Output() fulfilledChange = new EventEmitter<boolean>();

  removeWish() {
    this.events.emit("removeWish", this.wish);
  }

  toggleFulfilled() : void {
    this.wish.isComplete = !this.wish.isComplete;
    // this.fulfilled = !this.fulfilled;
    // this.fulfilledChange.emit(this.fulfilled);
  }
}
