import { Component, OnInit } from '@angular/core';
import { MatchService } from './../services/match/match.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fixtures',
  templateUrl: 'fixtures.page.html',
  styleUrls: ['fixtures.page.scss']
})

export class FixturesPage implements OnInit {
    
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
