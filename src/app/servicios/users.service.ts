import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import User from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   *
   * @param firestore Firestore
   */
  constructor(private firestore: Firestore) {}

  /**
   * Funcion para añadir informacion a una coleccion
   * @param user
   * @returns response
   */
  addUser(user: User) {
    // Collection es un metodo de firestore que devuelve una referencia de la coleccion
    const userRef = collection(this.firestore, 'users');
    return addDoc(userRef, user);
  }
  /**
   * Funcion que nos devuelve un observable para estar suscribirnos a la coleccion y saber cuando se actualiza la bbdd
   * Lo devolvemos como una array de Users.
   * @returns Observable User[]
   */
  getUsers(): Observable<User[]> {
    const userRef = collection(this.firestore, 'users');
    //Collection data nos devuelve los datos de la coleccion
    //Le hacemos un casteo a User[]
    return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
  }
  /**
   * Elimina un elemento de la collecion de usuarios
   * @param user User
   * @returns response
   */
  deleteUsers(user: User) {
    // Hay que pasarle la referencia al elemento unico de la coleccion de users
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return deleteDoc(userDocRef);
  }
}
