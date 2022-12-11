import { Villain } from 'src/app/models/villain';
import { Matchups } from 'src/app/models/matchups'
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit {
  villains: Villain[] = []
  heroes: Hero[] = []
  statsData: Matchups[] = []
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getMatchups().subscribe(itm => {
      this.statsData = itm;
      console.log(itm)
    });
    this._dataService.getAllHeroes().subscribe(itm => this.heroes = itm);
    this._dataService.getAllVillains().subscribe(itm => this.villains = itm);

  }
  getHeroName(matchupHeroId: number): string
  {
    for(let i= 0; i<this.heroes.length; i++)
    {
      if(this.heroes[i].heroId == matchupHeroId)
      {
        return this.heroes[i].heroName
      }
    }
    return "";
  }
  getVillainName(matchupVillainId: number): string
  {
    for(let i= 0; i<this.villains.length; i++)
    {
      if(this.villains[i].villainId == matchupVillainId)
      {
        return this.villains[i].villainName
      }
    }
    return "";
  }
  getHeroImage(idx: number): string
  {
    for(let i= 0; i<this.heroes.length; i++)
    {
      if(this.heroes[i].heroId == idx)
      {
        return this.heroes[i].imgUrl
      }
    }
    return "";
  }
  getVillainImage(idx: number): string
  {
    for(let i= 0; i<this.villains.length; i++)
    {
      if(this.villains[i].villainId == idx)
      {
        return this.villains[i].imgUrl
      }
    }
    return "";
  }

}
