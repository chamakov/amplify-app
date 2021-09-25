import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {path: 'home-gallery', component: HomeGalleryComponent},
  {path: 'upload-image', component: UploadImageComponent},
  {path: '', redirectTo: '/home-gallery', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
