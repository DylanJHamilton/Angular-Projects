import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiViewComponent } from './multi-view/multi-view.component';
import { SingleViewComponent } from './single-view/single-view.component';


const routes: Routes = [
  { path: 'main', pathMatch: 'full', component: AppComponent},
  { path: 'multi-view', pathMatch: 'full', component: MultiViewComponent },
  { path: 'single-view', pathMatch: 'full', component: SingleViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MultiViewComponent,
    SingleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
