import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { AddOrUpdateOrderComponent } from './add-or-update-order/add-or-update-order.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { CompleteDialog } from './current-orders/current-orders.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        AppComponent,
        NavDashboardComponent,
        AddOrUpdateOrderComponent,
        CurrentOrdersComponent,
        CompletedOrdersComponent,
        CompleteDialog,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatTabsModule,
        MatExpansionModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
