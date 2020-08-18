import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { ItemsComponent } from './query/items/items.component';
import { RentItemComponent } from './submit/rent-item/rent-item.component';
import { DetailedItemComponent } from './query/items/detailed-item/detailed-item.component';

const routes: Routes = [
  {path: '', component: FrontPageComponent, pathMatch: 'full'},
  {path: 'items', component: ItemsComponent},
  {path: 'items/:docID', component: DetailedItemComponent},
  {path: 'rent-item', component: RentItemComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
