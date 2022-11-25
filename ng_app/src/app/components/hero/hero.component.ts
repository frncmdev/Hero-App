import { Hero } from './../../models/hero';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() HeroData!: Hero;
  constructor()
  {
  }

  ngOnInit(): void {
    console.log(this.HeroData)
  }

}
