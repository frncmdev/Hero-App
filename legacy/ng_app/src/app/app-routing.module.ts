import { StatsPageComponent } from './components/stats-page/stats-page.component';
import { FightPageComponent } from './components/fight-page/fight-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "",component:FightPageComponent},
  {path:"stats",component:StatsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
