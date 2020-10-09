import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-buttom-show-all-heroes',
  templateUrl: './buttom-show-all-heroes.component.html',
  styleUrls: ['./buttom-show-all-heroes.component.css']
})
@Injectable()
export class ButtomShowAllHeroesComponent implements OnInit {
  cardName: any = [];
  heroes: any = [];
  profile = false;
  constructor(private httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.httpClient.get(`http://localhost:3000/todosLosHeroes`).subscribe(data => {
      this.heroes = data;
    });
  }
  showProfile(heroe) {
    this.profile = true;
    this.cardName = heroe;
    console.log(heroe);
  }
}