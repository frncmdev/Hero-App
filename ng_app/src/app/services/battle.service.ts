import { BehaviorSubject } from 'rxjs';
import { Villain } from './../models/villain';
import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';
import { Matchups } from '../models/matchups';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  Heros: Hero[] = []
  Villains: Villain[] = []
  selectedHero: Hero = this.Heros[0];
  selectedVillain: Villain = this.Villains[0];
  constructor() { }
  AddHeros(_hero: Hero): void {
    this.Heros.push(_hero);
    this.selectedHero = this.selectHero();
  }
  selectHero(index: number = 0):Hero {
    this.selectedHero = this.Heros[index];
    return this.Heros[index];
  }
  addVillains(_villain: Villain): void {
    this.Villains.push(_villain);
    this.selectedVillain = this.selectVillain();
  }
  selectVillain(index: number = 0): Villain
  {
    this.selectedVillain = this.Villains[index];
    return this.Villains[index];
  }
  roll(): Matchups
  {
    let hero = this.selectedHero;
    let villain = this.selectedVillain;
    var matchup: Matchups = {
      matchupId: this.generateMatchupID(),
      matchupTime: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      winner: '',
      heroId: hero.heroId,
      villainId: villain.villainId,
      hero: hero,
      villain: villain
    }
    let heroAttackVal = this.getAttackPower(hero);
    let villainAttackVal = this.getAttackPower(villain);
    if(villain.health - heroAttackVal == hero.health - villainAttackVal)
    {
      matchup["winner"] = 'draw';
    }
    else if (villain.health - heroAttackVal < hero.health - villainAttackVal)
    {
      matchup["winner"] ='hero';
    }
    else
    {
      matchup["winner"] = 'villain';
    }
    this.selectedHero = this.Heros[0];
    this.selectedVillain = this.Villains[0];

    return matchup
  }
  generateMatchupID = (): number => Math.floor(Math.random() * (Math.floor(15000) - Math.ceil(1) +1) + Math.ceil(1));

  getAttackPower = (_actor: Hero | Villain):number => {
    let min = Math.ceil(_actor.minAttack);
    let max = Math.floor(_actor.maxAttack);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
