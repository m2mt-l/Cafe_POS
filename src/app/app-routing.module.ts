import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrUpdateOrderComponent } from './add-or-update-order/add-or-update-order.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'add-or-update-order', component: AddOrUpdateOrderComponent},
    { path: 'dashboard', component: NavDashboardComponent},
    { path: 'completed-orders', component: CompletedOrdersComponent},
    { path: 'current-orders', component: CurrentOrdersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
