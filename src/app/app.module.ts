import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeGalleryComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    NgxPaginationModule,
    HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
