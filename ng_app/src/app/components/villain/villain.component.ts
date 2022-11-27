import { BattleService } from './../../services/battle.service';
import { DataService } from 'src/app/services/data.service';
import { Villain } from './../../models/villain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.scss']
})
export class VillainComponent implements OnInit {
  status: number = 0;
  villainData: Villain = {
    villainId: 99,
    villainName: '',
    health: 0,
    minAttack: 0,
    maxAttack: 0,
    imgUrl: ''
  };
  constructor(private _dataService: DataService, private _battleService: BattleService) { }

  ngOnInit(): void {
    this._dataService.getVillain().subscribe(_itm => {
      this.villainData = _itm;
      this._battleService.addVillains(_itm)

    });

  }
  check()
  {
    if(this._battleService.selectedVillain.villainId == this.villainData.villainId)
    {
      this.status = 1
    }
  }

}
