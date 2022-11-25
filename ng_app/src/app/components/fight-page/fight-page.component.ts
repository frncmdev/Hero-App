import { Hero } from './../../models/hero';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-fight-page',
  templateUrl: './fight-page.component.html',
  styleUrls: ['./fight-page.component.scss']
})
export class FightPageComponent implements OnInit {
  heroDataArray: Observable<Hero[]>;
  constructor(private _dataService: DataService) {
    this.heroDataArray = new Observable<Hero[]>;

  }
  ngOnInit(): void {
    this._dataService.getHeros();
    this._dataService.hero.subscribe(_item => this.heroDataArray = of(_item)).unsubscribe();
    this._dataService.hero.subscribe(_itm => console.log(_itm[0]));
  }

}
