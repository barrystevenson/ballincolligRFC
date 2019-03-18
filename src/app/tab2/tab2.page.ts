import { Component, OnInit } from '@angular/core';
import { MatchService } from './../services/match/match.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
    
    public matches: Array<any>;
    
    constructor(private matchService: MatchService) {}
        
    ngOnInit(){
        this.matchService.getMatches().get().then(matchSnapshot => {
            this.matches = [];
            matchSnapshot.forEach(snap => {
                this.matches.push({
                    id: snap.id,
                    date: snap.data().date,
                    team: snap.data().team,
                    home: snap.data().home,
                    away: snap.data().away,
                    homeScore: snap.data().homeScore,
                    awayScore: snap.data().awayScore,
                    
                });
                return false;
                });
        });
    }
}
