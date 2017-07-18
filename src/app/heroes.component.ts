import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  providers: [HeroService],
  selector: 'my-heroes',
  template: `
  <div *ngIf="selectedHero">
    <hero-detail [hero]="selectedHero"></hero-detail>
  </div>
  <h2>My Heroes</h2>
  <ul class="heroes">
      <li [class.selected]="hero === selectedHero"
          *ngFor="let hero of heroes"
          (click)="onSelect(hero)">
        <span class="badge">
            {{hero.id}}
        </span>
        {{hero.name}}
      </li>
  </ul>`
})

  export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  setHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.setHeroes();
  }
}

export class Hero {
  id: number;
  name: string;
}
