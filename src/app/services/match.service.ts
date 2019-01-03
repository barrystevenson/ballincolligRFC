import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Match {
    task: string;
    priority: number;
    createdAt: number;
    
}


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private matchCollection: AngularFirestoreCollection<Match>;
  private matches: Observable<Match[]>;
    
  constructor(db: AngularFirestore) { 
    this.matchCollection = db.collection<Match>('matches');
      
      this.matches = this.matchCollection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {id, ...data};
            });
        })
      );
  }
    
    getMatches () {
        return this.matches;
    }
    
    getMatch(id) {
        return this.matchCollection.doc<Match>(id).valueChanges();
    }
}
