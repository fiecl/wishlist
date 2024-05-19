import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/productslist/productslist.component';

const routes: Routes = [
  { path: "", component: FirstComponent},
  { path: "second", component: SecondComponent},
  { path: "contact", component: ContactComponent},
  { path: "products", component: ProductslistComponent},
  { path: "**", component: NotFoundComponent},
]; // These paths are all relative to the application where root: localhost:4200. So we have localhost:4200/first and localhost:4200/second

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
