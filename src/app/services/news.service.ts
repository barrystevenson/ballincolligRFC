import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface News {
  title: string;    
  body: string;  
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

    
  private newsCollection: AngularFirestoreCollection<News>;
  private newsstories: Observable<News[]>;
  
  constructor(db: AngularFirestore) { 
    this.newsCollection = db.collection<News>('newsstories');
      
      this.newsstories = this.newsCollection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {id, ...data};
            });
        })
      );
  }
    
    getNewsStories () {
        return this.newsstories;
    }
    
    getNewsStory(id) {
         return this.newsCollection.doc<News>(id).valueChanges();           
    }
}
