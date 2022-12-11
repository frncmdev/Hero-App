import { BattleService } from './../../services/battle.service';
import { Matchups } from './../../models/matchups';
import { Hero } from './../../models/hero';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Villain } from 'src/app/models/villain';

@Component({
  selector: 'app-fight-page',
  templateUrl: './fight-page.component.html',
  styleUrls: ['./fight-page.component.scss']
})
//149281
export class FightPageComponent implements OnInit {
  slctHero: number | null = null;
  slctVillain: number | null = null;

  Matchup!: Matchups;
  Winner: string = "";
  constructor(private _dataService: DataService, private _battleService: BattleService) {
  }
  ngOnInit(): void {
  }
  roll()
  {
    if((this.slctHero == null || this.slctVillain == null) || this.slctHero == null && this.slctVillain == null)
      return;
    else
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
      this._dataService.createMatchup(this.Matchup).subscribe((itm: any) => console.log(itm));
      this.slctHero = null;
      this.slctVillain = null;
    }

  }

  selectHero(idx: number)
  {
    this._battleService.selectHero(idx)
    this.slctHero = idx
  }
  selectVillain(idx: number)
  {
    this._battleService.selectVillain(idx)
    this.slctVillain = idx
    console.log(this.slctVillain);
  }
}



