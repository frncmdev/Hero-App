import { BattleService } from './../../services/battle.service';
import { Hero } from './../../models/hero';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroData: Hero = {
    heroId: 0,
    heroName: '',
    health: 0,
    minAttack: 0,
    maxAttack: 0,
    imgUrl: ''
  };
  constructor(private _dataService: DataService, private _battleService: BattleService)
  {

  }

  ngOnInit(): void {

    this._dataService.getHero().subscribe(_itm =>
      {this.heroData = _itm;
       this._battleService.AddHeros(_itm) }
      )
  }



}
