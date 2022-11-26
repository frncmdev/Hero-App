import { BehaviorSubject } from 'rxjs';
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
  hero: BehaviorSubject<Hero>
  loading: BehaviorSubject<boolean>;
  api_base_url: string = "http://localhost:5204/api/"

  constructor(private _http: HttpClient) {
    this.loading = new BehaviorSubject(false);
    this.hero = new BehaviorSubject({} as Hero)
  }

  getHero(): Promise<unknown>
  {
    this.loading.next(true)
    return new Promise((resolve, reject) => {
      this._http.get<Hero>(`${this.api_base_url}hero`).subscribe(res => {
        this.hero.next(res);
      }, err => {
        console.error(err);
        reject(err)
      })
    })

  }
  getVillain()
  {

  }
  getMatchups()
  {

  }
  createMatchup()
  {

  }

}
