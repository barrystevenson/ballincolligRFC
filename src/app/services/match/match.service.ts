import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


@Injectable({
  providedIn: 'root'
})
export class MatchService {

 public matchesRef: firebase.firestore.CollectionReference;
 public matchLineupRef: firebase.firestore.CollectionReference;
 public tryScorersRef: firebase.firestore.CollectionReference;
 public penaltyScorersRef: firebase.firestore.CollectionReference;
 public conversionScorersRef: firebase.firestore.CollectionReference;
 
    
  constructor() { 
      this.matchesRef = firebase.firestore().collection('/matches');
   }

  getMatches (): firebase.firestore.Query {
        return this.matchesRef.orderBy("date","desc");
    }
    
  getMatch(matchId: string): firebase.firestore.DocumentReference {
         return this.matchesRef.doc(matchId);        
    }
    
  getMatchLineup (matchId: string): firebase.firestore.Query {
       this.matchLineupRef = firebase.firestore().collection('/matches/' + matchId + '/lineup');
       return this.matchLineupRef.orderBy("number","asc");
    }

  getTryScorers (matchId: string): firebase.firestore.Query {
       this.tryScorersRef = firebase.firestore().collection('/matches/' + matchId + '/tries');
       return this.tryScorersRef.orderBy("name","asc");
    }
    
  getPenaltyScorers (matchId: string): firebase.firestore.Query {
       this.penaltyScorersRef = firebase.firestore().collection('/matches/' + matchId + '/penalties');
       return this.penaltyScorersRef.orderBy("name","asc");
    }
    
  getConversionScorers (matchId: string): firebase.firestore.Query {
       this.conversionScorersRef = firebase.firestore().collection('/matches/' + matchId + '/conversions');
       return this.conversionScorersRef.orderBy("name","asc");
    }

}
