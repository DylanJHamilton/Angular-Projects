import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Custom Components
import { MultiViewComponent } from './multi-view/multi-view.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

//Elements
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { EmailNotificationsComponent } from './email-notifications/email-notifications.component';
import {MatFormFieldModule} from '@angular/material/form-field';



const routes: Routes = [
  { path: 'main', pathMatch: 'full', component: AppComponent},
  { path: 'multi-view', pathMatch: 'full', component: MultiViewComponent },
  { path: 'single-view', pathMatch: 'full', component: SingleViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MultiViewComponent,
    SingleViewComponent,
    AdminLoginComponent,
    EmailNotificationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatSliderModule, 
    MatTabsModule, BrowserAnimationsModule,
    MatDialogModule, MatFormFieldModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
