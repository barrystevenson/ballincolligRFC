import { Component, OnInit } from '@angular/core';
import { NewsService } from './../services/news/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html',
  styleUrls: ['news.page.scss']
})

export class NewsPage implements OnInit {
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
                    date: snap.data().date,
                });
                return false;
            });
        });
    
    }
}
