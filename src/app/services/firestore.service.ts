import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getAll(collectionName: string): Observable<any> {
    return this.firestore.collection(collectionName).valueChanges();
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.firestore.collection(collectionName).doc(id).valueChanges();
  }

  create(collectionName: string, data: any): Promise<any> {
    return this.firestore.collection(collectionName).add(data);
  }

  update(collectionName: string, id: string, data: any): Promise<void> {
    return this.firestore.collection(collectionName).doc(id).update(data);
  }

  delete(collectionName: string, id: string): Promise<any> {
    return this.firestore.collection(collectionName).doc(id).delete();
  }
}
