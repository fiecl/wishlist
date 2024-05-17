import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishComponent } from './wish.component';

@NgModule({
  declarations: [
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  // exports: Array that contains the components you want to export so that whenever we set up our application to use this WishModule, everything that can be exported from the WishModule is going to be available to use within our application
  exports: [
    WishComponent, // NOTE: All we really need to export is the WishComponent, as anything that is going to use this module is going to primarily just use this WishComponent
  ]
})
export class WishModule {}
