import { Hero } from './../models/hero';
import { Matchups } from './../models/matchups';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Villain } from '../models/villain';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // http://localhost:5204/api/hero
  api_base_url: string = "http://localhost:5204/api/"
  hero: BehaviorSubject<Hero[]>;
  villains: BehaviorSubject<Villain[]>;
  Matchups: BehaviorSubject<Matchups[]>;
  constructor(private _http: HttpClient) {
    this.hero = new BehaviorSubject(new Array<Hero>);
    this.villains = new BehaviorSubject(new Array<Villain>);
    this.Matchups = new BehaviorSubject(new Array<Matchups>);
  }
  getHeros()
  {
    for(let i: number = 0; i<3; i++)
    {
      this._http.get<Hero>(this.api_base_url+"Hero").subscribe(_item => {
        let reducer: Hero[] = []
        this.hero.subscribe(_itm => reducer = _itm)
        this.hero.next([_item, ...reducer]);
      });
    }

  }
  getHero()
  {

  }
}
