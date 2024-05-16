import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
]

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent {

  constructor() {}

  ngOnInit(): void {
    // this.changeFilter('0'); // OR THE CODE BELOW (THIS IS TO DISPLAY ALL WISHES ON INITIALIZATION)
    this.updateFilter('0'); // 2. However, when ngOnInit executes, we update the filter
  }

  @Input() filter: any; // 1. Initially, undefined because it is bound to that filter property in the app component, which is undefined. 
  @Output() filterChange = new EventEmitter<any>(); // IMPORTANT: ADD 'Change' TO LET ANGULAR KNOW THAT THE @Input() and @Output() are linked together

  listFilter : any = '0';

  updateFilter(value: any) {
    this.filter = filters[value]; // 3. After ngOnInit, we change the filter property to the given filter
    this.filterChange.emit(this.filter); // 4. We emit the filterChange event with that new filter, that in turn updates the filter property on the app component (parent component)
  }
}
