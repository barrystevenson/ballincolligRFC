import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
 public currentNewsStory: any = {};
    
 constructor(private newsService: NewsService, 
              private route: ActivatedRoute) {}
        
  ngOnInit() {
   const newsId: string = this.route.snapshot.paramMap.get('id');
     this.newsService.getNewsStory(newsId).get()
      .then(newsStorySnapshot=> {
         this.currentNewsStory = newsStorySnapshot.data();
         this.currentNewsStory.id = newsStorySnapshot.id;
     });
  }
 
}
