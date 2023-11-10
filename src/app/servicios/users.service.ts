import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: Firestore) {}

  addUser(user: User) {
    // Collection es un metodo de firestore que devuelve una referencia de la coleccion
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }
}
