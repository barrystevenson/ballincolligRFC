import { Component, OnInit } from '@angular/core';
import { MatchService } from './../../services/match/match.service';
import { HelperService } from './../../services/helper/helper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-match-tabs',
  templateUrl: './edit-match-tabs.page.html',
  styleUrls: ['./edit-match-tabs.page.scss'],
})
export class EditMatchTabsPage{
    
    public currentMatchDetails: any = {};
    
      public homeTeam: string;
      public awayTeam: string;
      public team: string;
      public competition: string;
      public venue: string;
      public matchDate: Date;
      public homeScore: string;
      public awayScore: string;
    
    constructor(private matchService: MatchService, 
                private helperService: HelperService, 
                private route: ActivatedRoute,
                private router: Router
                ) { }

  ngOnInit() {
  
    const matchId: string = this.route.snapshot.firstChild.paramMap.get('id');
      
    this.returnMatchDetails(matchId);
     }
    
    /*
     * Return Match Details
     */
    
    private async returnMatchDetails(matchId: string){     
        const matchDetailsSnapshot = await this.matchService.getMatch(matchId).get();
        this.currentMatchDetails = matchDetailsSnapshot.data();
        this.currentMatchDetails.id = matchDetailsSnapshot.id; 
        
    }


      updateMatch(matchId): void {
      
        let matchDetails = {};

        if (this.homeScore != null)
            {
            matchDetails['homeScore'] = this.homeScore;        
            }
        if (this.awayScore != null)
            {
            matchDetails['awayScore'] = this.awayScore;      
            }    
        matchDetails['homeTeam'] = this.homeTeam;
        matchDetails['awayTeam'] = this.awayTeam;
        matchDetails['team'] = this.team;
        matchDetails['competition'] = this.competition;
        matchDetails['venue'] = this.venue;
        matchDetails['date'] = this.matchDate;
        this.matchService.updateMatch(matchId, matchDetails);
        this.router.navigateByUrl('admin-home');
    }

}
