import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

public newsStoriesRef: firebase.firestore.CollectionReference;
public paragraphsRef: firebase.firestore.CollectionReference;
    
  constructor() { 
    this.newsStoriesRef = firebase.firestore().collection('/newsstories');
   
  }
    
    getNewsStories (): firebase.firestore.Query {
        return this.newsStoriesRef.orderBy("date","desc");
         
    }
    
    getNewsStory(newsStoryId: string): firebase.firestore.DocumentReference {
         return this.newsStoriesRef.doc(newsStoryId);        
    }
    
    getAllParagaraphs (newsStoryId: string): firebase.firestore.Query {
       this.paragraphsRef = firebase.firestore().collection('/newsstories/' + newsStoryId + '/paragraphs');
       return this.paragraphsRef;
    }
    
}

