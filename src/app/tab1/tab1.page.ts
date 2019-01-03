import { Component, OnInit } from '@angular/core';
import { News, NewsService } from './../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
    
    newsstories: News[];
    
    constructor(private newsService: NewsService) {}
        
    ngOnInit(){
        this.newsService.getNewsStories().subscribe(res => {
        this.newsstories = res;
        });
    }
}
