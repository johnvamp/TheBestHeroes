import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-buttom-init',
  templateUrl: './buttom-init.component.html',
  styleUrls: ['./buttom-init.component.css']
})
@Injectable()
export class ButtomInitComponent implements OnInit {
  heroes: any = [];
  mayor = 0;
  heroeStat = 0;
  bestHero: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(`http://localhost:3000/todosLosHeroes`).subscribe(data => {
      this.heroes = data;
      this.heroes.forEach(element => {
        if (!isNaN(element[4]) && !isNaN(element[5]) && !isNaN(element[6]) && !isNaN(element[7]) &&
          !isNaN(element[8]) && !isNaN(element[9])) {
          this.heroeStat = element[4] + element[5] + element[6] + element[7] + element[8] + element[9];
          if (this.heroeStat > this.mayor) {
            this.mayor = this.heroeStat;
            this.bestHero = element;
          }
        }
      });
    });
  }
}
