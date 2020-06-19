import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerComponent} from './views/customer/customer.component';
import {ItemComponent} from './views/item/item.component';
import {OrdersComponent} from './views/orders/orders.component';
import {NotFoundComponent} from './views/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'customer/:id/:name',
    component: CustomerComponent
  },
  {
    path: 'customer/:id',
    component: CustomerComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'item',
    component: ItemComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customer'
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
