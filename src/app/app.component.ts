import { Component, ChangeDetectorRef } from '@angular/core';
import { API, Auth } from "aws-amplify";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Luminitas-Rekognition-App';

  user: CognitoUserInterface | undefined;
  authState: AuthState;
  idToken="";

  constructor(private ref: ChangeDetectorRef) {
    this.authState = AuthState.Loading;
  }

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();

      this.idToken = this.user?.signInUserSession.idToken.jwtToken;
      localStorage.setItem('tokenSesionUsuario', this.idToken);
      console.log(this.idToken);
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

  getAlgo(){
    this.idToken= this.user?.signInUserSession.idToken.jwtToken;
    console.log(this.idToken);
    API.get("LumiapirekogdevEndpoint69B7D6A1", "/LumiRekogApi/fotografias", {
      "headers" : {
        "Authorization" : this.idToken
      }
    })
      .then(response => {
        // Add your code here
        //msmsm
        console.log(response);
      })
      .catch(error => {
        console.log(error.response)
      })  
  }
  
}