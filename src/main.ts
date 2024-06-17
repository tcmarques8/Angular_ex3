import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { HomeComponent } from './app/home/home.component';
import { TransactionDetailComponent } from './app/transaction-detail/transaction-detail.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'transaction/:id', component: TransactionDetailComponent }
];

bootstrapApplication(HomeComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
