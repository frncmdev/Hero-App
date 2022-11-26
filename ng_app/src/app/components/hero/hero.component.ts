import { Hero } from './../../models/hero';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroData!: Hero;
  constructor(private _dataService: DataService)
  {

  }

  ngOnInit(): void {
    this.getComponentHero();
    this._dataService.hero.subscribe(item => {
      this.heroData = item;
    }).unsubscribe();
  }
  getComponentHero()
  {

    this._dataService.getHero()
      .then(() => {console.log("$")})
      .catch(
        err => console.error(err)
      )
      .finally(() => this._dataService.loading.next(false));

    }

}
