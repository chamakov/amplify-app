import { Component, OnInit, ChangeDetectorRef, NgZone} from '@angular/core';
import { tick } from '@angular/core/testing';
import { API, Auth } from "aws-amplify";
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {
  Movies: any[] = [];
  collection: any = [];
  p: any;
  idToken: any;
  searchParameter: any = '';
  constructor(private ref: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    console.log(this.Movies)
    this.idToken = localStorage.getItem('tokenSesionUsuario');
    this.getAlgo();
  }

  buscarAlgo(){
    console.log(this.searchParameter);
    debugger;
    if (this.searchParameter == '') {
      this.getAlgo();
    } else {
      API.post("LumiapirekogdevEndpoint69B7D6A1", "/LumiRekogApi/fotografias", {
        "body" : {
          "parameter": this.searchParameter
        },
        "headers" : {
          "Authorization" : this.idToken
        },
      })
        .then(response => {
          this.updateData(response);
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  }

  eliminarAlgo(id:any, owner:any){
    API.del("LumiapirekogdevEndpoint69B7D6A1", "/LumiRekogApi/fotografias", {
      "body" : {
        "id": id,
        "owner": owner
      },
      "headers" : {
        "Authorization" : this.idToken
      }
    })
      .then(response => {
        this.getAlgo();
      })
      .catch(error => {
        console.log(error.response);
        this.getAlgo();
      })
  }

  getAlgo(){
    API.get("LumiapirekogdevEndpoint69B7D6A1", "/LumiRekogApi/fotografias", {
      "headers" : {
        "Authorization" : this.idToken
      }
    })
      .then(response => {
        this.updateData(response);
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  updateData(data: any){
    this.ngZone.run(() => {
      this.Movies = data.images;
    })
  }
}
