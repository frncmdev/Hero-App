import { BattleService } from './../../services/battle.service';
import { Matchups } from './../../models/matchups';
import { Hero } from './../../models/hero';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { of, Observable, ConnectableObservable } from 'rxjs';
import { Villain } from 'src/app/models/villain';

@Component({
  selector: 'app-fight-page',
  templateUrl: './fight-page.component.html',
  styleUrls: ['./fight-page.component.scss']
})
export class FightPageComponent implements OnInit {
  Matchup!: Matchups;
  Winner: string = "";
  constructor(private _dataService: DataService, private _battleService: BattleService) {
  }
  ngOnInit(): void {
  }
  roll()
  {
    this.Matchup = this._battleService.roll();
    if(this.Matchup.winner == "draw") {
      this.Winner = "this bout has ended in a draw";
    } else if (this.Matchup.winner == "hero")
    {
      this.Winner = `The winner is ${this.Matchup.hero.heroName}`;
    } else
    {
      this.Winner = `The winner is ${this.Matchup.villain.villainName}`
    }
    this._dataService.createMatchup(this.Matchup).subscribe(i => console.log(i))
  }

  selectHero(idx: number)
  {
    this._battleService.selectHero(idx)
  }
  selectVillain(idx: number)
  {
    this._battleService.selectVillain(idx)
  }
}



