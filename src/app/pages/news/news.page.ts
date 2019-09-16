import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../services/news/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
 public currentNewsStory: any = {};
 public newsParagraphs: Array<any>;    
    
 constructor(private newsService: NewsService, 
              private route: ActivatedRoute) {}
        
  ngOnInit() {
   const newsId: string = this.route.snapshot.paramMap.get('id');
     this.newsService.getNewsStory(newsId).get()
      .then(newsStorySnapshot=> {
         this.currentNewsStory = newsStorySnapshot.data();
         this.currentNewsStory.id = newsStorySnapshot.id;
     });
  this.returnAllParagraphs(newsId);
  }
    
    private async returnAllParagraphs(newsId: string){
        const paragraphSnapshot = await this.newsService.getAllParagaraphs(newsId).get();
        this.newsParagraphs = [];
         paragraphSnapshot.forEach(snap => {
                this.newsParagraphs.push({
                    id: snap.id,
                    paragraph: snap.data().paragraph,
                });
                return false;
            });
    }
 
}
