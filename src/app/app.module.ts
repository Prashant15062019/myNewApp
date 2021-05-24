import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PhotosComponent } from './photos/photos.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageFormatterComponent } from './photos/imageformator.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PhotosComponent,ImageFormatterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AgGridModule.withComponents([ImageFormatterComponent]), HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
