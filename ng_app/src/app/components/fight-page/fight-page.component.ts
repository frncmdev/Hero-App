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
  heroData!: Hero;
  constructor(private _dataService: DataService) {
  }
  ngOnInit(): void {
  }


}
