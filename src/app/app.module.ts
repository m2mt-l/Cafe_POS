import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { AddOrUpdateOrderComponent } from './add-or-update-order/add-or-update-order.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
    declarations: [
        AppComponent,
        NavDashboardComponent,
        AddOrUpdateOrderComponent,
        CurrentOrdersComponent,
        CompletedOrdersComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
