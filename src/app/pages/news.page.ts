import { Component, OnInit } from '@angular/core';
import { News, NewsService } from './../services/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

news: News = {
    title: 'Test title',
    body: 'Test body'
}
    
  newsId = null;
  newsstories: News[];
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }
    
    
  ngOnInit() {
   //this.newsId = this.route.snapshot.paramMap.get('id');
   this.newsId = this.route.snapshot.params['id'];
      if (this.newsId){
       this.loadNews();
    }     
  }

    loadNews (){
        this.newsService.getNewsStory(this.newsId).subscribe( res => {
        this.news = res;    
        });      
    }   
}
