import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiViewComponent } from './multi-view/multi-view.component';
import { SingleViewComponent } from './single-view/single-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiViewComponent,
    SingleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
