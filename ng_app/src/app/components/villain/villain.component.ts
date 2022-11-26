import { DataService } from 'src/app/service/data.service';
import { Villain } from './../../models/villain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.scss']
})
export class VillainComponent implements OnInit {
  villainData: Villain = {
    villainId: 0,
    villainName: '',
    health: 0,
    minAttack: 0,
    maxAttack: 0,
    imgUrl: ''
  };
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getVillain().subscribe(_itm => {
      this.villainData = _itm;
      console.log(_itm)
    });
  }

}
