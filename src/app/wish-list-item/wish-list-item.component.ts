import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  constructor() {}

  ngOnInit(): void {}

  get cssClasses() {
    // return this.fulfilled ? 'strikeout' : '';
    return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    // return {'strikeout text-muted': this.fulfilled};
  }


  @Input() wishText! : string; // !: non-null assertion operator - this wishText property is a non-null property (we're using the bang symbol ! since we know it's going to be supplied by the parent)

  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  toggleFulfilled() : void {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
