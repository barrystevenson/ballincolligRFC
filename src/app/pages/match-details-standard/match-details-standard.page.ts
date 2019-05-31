import { Component, OnInit } from '@angular/core';
import { MatchService } from './../../services/match/match.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-details-standard',
  templateUrl: './match-details-standard.page.html',
  styleUrls: ['./match-details-standard.page.scss'],
})
export class MatchDetailsStandardPage implements OnInit {
  
  public currentMatchDetails: any = {};
  public lineup: Array<any>;
  public tryScorers: Array<any>;
    
  constructor(private matchService: MatchService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    const matchId: string = this.route.snapshot.paramMap.get('id');
     this.matchService.getMatch(matchId).get()
      .then(matchDetailsSnapshot=> {
         this.currentMatchDetails = matchDetailsSnapshot.data();
         this.currentMatchDetails.id = matchDetailsSnapshot.id;
     });
      
     /*
     * Return the Match Lineup 
     */
     this.matchService.getMatchLineup(matchId).get().then(matchLineupSnapshot =>{
        this.lineup = [];
            matchLineupSnapshot.forEach(snap => {
                this.lineup.push({
                    id: snap.id,
                    name: snap.data().name,
                    number: snap.data().number,
                });
                return false;
            });
        });
        
     /*
     * Return the Match Lineup 
     */
     this.matchService.getTryScorers(matchId).get().then(tryScorersSnapshot =>{
        this.tryScorers = [];
            tryScorersSnapshot.forEach(snap => {
                this.tryScorers.push({
                    id: snap.id,
                    name: snap.data().name,
                });
                return false;
            });
            
        /*
        * Sort the scorers into a more readable format
        */
        this.getSortedScorers(this.tryScorers);
        });
      
        
  }
    
   /*
   * Remove duplicate names from the scorers list. e.g. If John Smith scores 3 tries
   * I don't want to see John Smith, John Smith, John Smith - I want to see John Smith (3)
   */
    getSortedScorers(scorers: Array<any>) : Array<any> {
        
        for (let i = 0; scorers.length ; i++){
                var numberScored = 1;  
                var scorerName = scorers[i].name; 
            for (let j = i + 1; scorers.length - j ; j ++) {
                    
                  if(scorers[i].name == scorers[j].name) {
                      numberScored++;
                      scorers[i].name = scorerName + " (" + numberScored + ")";
                      scorers.splice(j,1);
                    }
                   }
               }
        return scorers;
        
    } 

}

