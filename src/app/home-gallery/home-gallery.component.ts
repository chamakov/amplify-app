import { trigger } from '@angular/animations';
import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';

import { Image } from '../image';
import { ImageService } from '../image.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent {

  collection: any;
  p: number = 0;
    constructor( private http: HttpClient) {}
  
    ngOnInit() {
  this.getAllData();
    }
  
    getAllData() {
        const url = "https://api.instantwebtools.net/v1/passenger";
      this.http.get(url).subscribe((data: any) => {
        console.log(data);
        this.collection =  data;
      })
    };
  }
