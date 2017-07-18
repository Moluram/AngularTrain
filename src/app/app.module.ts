import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent } from './heroes.component'
import { HeroService } from './hero.service'

@NgModule({
  providers: [HeroService],
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {
                      path: 'heroes',
                      component: HeroesComponent
                    }
                  ]) ],
  declarations: [ AppComponent, HeroesComponent,
                  HeroDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }