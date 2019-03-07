import { Component, OnInit } from '@angular/core';
import { NewsService } from './../services/news/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
    public newsStories: Array<any>;
    
    constructor(private newsService: NewsService) {}
        
    ngOnInit(){
      
        this.newsService.getNewsStories().get().then(newsStoriesSnapshot =>{
            this.newsStories = [];
            newsStoriesSnapshot.forEach(snap => {
                this.newsStories.push({
                    id: snap.id,
                    title: snap.data().title,
                    image: snap.data().image,
                });
                return false;
            });
        });
    
    }
}
