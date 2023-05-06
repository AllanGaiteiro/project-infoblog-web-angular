import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: AngularFirestore) { }

  search(text: string, isTag: boolean = false): Observable<Post[]> {
    const query: QueryFn = (ref) =>
      isTag
        ? ref.where('tags', 'array-contains', text.toString())
        : ref
          .where('title', '>=', text)
          .where('title', '<=', text + '\uf8ff');
    return this.firestore.collection<Post>('posts', query).valueChanges();
  }

  findBySection(section: string, limit?: number): Observable<Post[]> {
    const query: QueryFn = (ref) =>
      limit
        ? ref.where('tags', 'array-contains', section.toString()).limit(limit)
        : ref.where('tags', 'array-contains', section.toString());
    return this.firestore.collection<Post>('posts', query).valueChanges();
  }

  findMoreViews(quant?: number): Observable<Post[]> {
    let query: QueryFn;
    if (quant) {
      query = (ref) => ref.orderBy('views', 'desc').limit(quant);
    } else {
      query = (ref) => ref.orderBy('views', 'desc');
    }
    return this.firestore.collection<Post>('posts', query).valueChanges();
  }

  findById(id: string): Observable<Post | undefined> {
    return this.firestore
      .collection<Post>('posts')
      .doc(id)
      .valueChanges();
  }

  create(post: Post): void {
    const id = this.firestore.createId();
    this.firestore
      .collection<Post>('posts')
      .doc(id)
      .set(Object.assign({}, post, { id }));
  }

  update(post: Post): void {
    this.firestore
      .collection<Post>('posts')
      .doc(post.id)
      .set(post, { merge: true });
  }

  // remover depois de usar
  createAll(): void {
    const posts: Post[] = [];
    posts.forEach((post) => this.create(post));
  }
}
