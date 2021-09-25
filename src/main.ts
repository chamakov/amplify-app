import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from '@aws-amplify/core';
import Auth from 'aws-amplify';
import awsmobile from "./aws-exports";

Amplify.configure({
  API: {
    endpoints:[
      {
        name: 'LumiapirekogdevEndpoint69B7D6A1',
        endpoint: 'https://dyq0v4lcs0.execute-api.us-east-1.amazonaws.com/prod'
      }
    ]
  }
});

Amplify.configure(awsmobile);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
