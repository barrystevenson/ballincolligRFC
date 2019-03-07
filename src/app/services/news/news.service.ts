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
    
  constructor() { 
    this.newsStoriesRef = firebase.firestore().collection('/newsstories');
   
  }
    
    getNewsStories (): firebase.firestore.CollectionReference {
        return this.newsStoriesRef;
    }
    
    getNewsStory(newsStoryId: string): firebase.firestore.DocumentReference {
         return this.newsStoriesRef.doc(newsStoryId);        
    }
    
}

