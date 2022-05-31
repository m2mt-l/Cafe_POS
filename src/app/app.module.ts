import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { AddOrUpdateOrderComponent } from './add-or-update-order/add-or-update-order.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { ComplitedOrdersComponent } from './complited-orders/complited-orders.component';

@NgModule({
    declarations: [
        AppComponent,
        NavDashboardComponent,
        AddOrUpdateOrderComponent,
        CurrentOrdersComponent,
        ComplitedOrdersComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
