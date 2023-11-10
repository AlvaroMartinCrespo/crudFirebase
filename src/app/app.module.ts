import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'crud-bfae3',
        appId: '1:76445222338:web:dbfc8afb9ffb23e0da025b',
        storageBucket: 'crud-bfae3.appspot.com',
        apiKey: 'AIzaSyDsAtYXUWxl11lzSL2COPr0wM8TVVl3KWQ',
        authDomain: 'crud-bfae3.firebaseapp.com',
        messagingSenderId: '76445222338',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
