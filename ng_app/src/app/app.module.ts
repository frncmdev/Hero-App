import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FightPageComponent } from './components/fight-page/fight-page.component';
import { StatsPageComponent } from './components/stats-page/stats-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { VillainComponent } from './components/villain/villain.component';

@NgModule({
  declarations: [
    AppComponent,
    FightPageComponent,
    StatsPageComponent,
    HeroComponent,
    VillainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
