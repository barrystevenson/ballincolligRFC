import { Component, OnInit } from '@angular/core';
import { Match, MatchService } from './../services/match.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
    
    matches: Match[];
    
    constructor(private matchService: MatchService) {}
        
    ngOnInit(){
        this.matchService.getMatches().subscribe(res => {
        this.matches = res;
        });
    }
}
