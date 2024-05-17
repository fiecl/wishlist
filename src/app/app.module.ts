import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WishModule } from './wish/wish.module';
// import { WishListComponent } from './wish/wish-list/wish-list.component';
// import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
// import { WishFilterComponent } from './wish/wish-filter/wish-filter.component';
// import { WishListItemComponent } from './wish/wish-list-item/wish-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    // WishListComponent,
    // AddWishFormComponent,
    // WishFilterComponent,
    // WishListItemComponent
  ],
  imports: [
    BrowserModule,
    WishModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
