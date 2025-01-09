import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyDbFYbmLPrXHPfgscYX7DujAhq78fe6p04',
        authDomain: 'clips-16bc0.firebaseapp.com',
        projectId: 'clips-16bc0',
        storageBucket: 'clips-16bc0.firebasestorage.app',
        messagingSenderId: '363794720835',
        appId: '1:363794720835:web:6557cfa70d0d4d1cd18cf6',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
