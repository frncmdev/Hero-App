import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { Hero } from './../models/hero';
import { Matchups } from './../models/matchups';
import { Injectable } from '@angular/core';
import { Villain } from '../models/villain';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  // http://localhost:5204/api/hero
  hero: ReplaySubject<Hero>
  loading: BehaviorSubject<boolean>;
  api_base_url: string = "http://localhost:5204/api/"

  constructor(private _http: HttpClient) {
    this.loading = new BehaviorSubject(false);
    this.hero = new ReplaySubject();
  }

  getHero(): Observable<Hero>
  {
    return this._http.get<Hero>(`${this.api_base_url}hero`);

  }
  getVillain(): Observable<Villain>
  {
    return this._http.get<Villain>(`${this.api_base_url}villain`);
  }
  getMatchups()
  {

  }
  createMatchup()
  {

  }

}
