import { Component, OnInit } from '@angular/core';
import { MatchService } from './../../services/match/match.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.page.html',
  styleUrls: ['./match-details.page.scss'],
})
export class MatchDetailsPage implements OnInit {
  
  public currentMatchDetails: any = {};
    
  constructor(private matchService: MatchService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    const matchId: string = this.route.snapshot.paramMap.get('id');
     this.matchService.getMatch(matchId).get()
      .then(matchDetailsSnapshot=> {
         this.currentMatchDetails = matchDetailsSnapshot.data();
         this.currentMatchDetails.id = matchDetailsSnapshot.id;
     });
  }

}

