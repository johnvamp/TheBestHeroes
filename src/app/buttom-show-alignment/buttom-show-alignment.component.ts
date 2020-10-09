import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const goodHeroes = new Array();
const badHeroes = new Array();
@Component({
  selector: 'app-buttom-show-alignment',
  templateUrl: './buttom-show-alignment.component.html',
  styleUrls: ['./buttom-show-alignment.component.css']
})

@Injectable()
export class ButtomShowAlignmentComponent implements OnInit {
  heroeList: any = [];
  heroes: any = [];
  radios: any = document.getElementsByName('rbutoom');
  value = '';
  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get(`http://localhost:3000/todosLosHeroes`).subscribe(data => {
      this.heroes = data;
    });
  }

  getCheckedSection() {
    for (var i = 0; i < 3; i++) {
      if (this.radios[i].checked) {
        this.value = this.radios[i].value;
      }
    }
    this.aligmentList();
  }

  aligmentList() {
    this.heroes.forEach(element => {
      if (this.value == 'good' && element[3] == this.value) {
        goodHeroes.push(element);
        this.heroeList = goodHeroes;
      }
      if (this.value == 'bad' && element[3] == this.value) {
        badHeroes.push(element);
        this.heroeList = badHeroes;
      }
      if (this.value == 'all') {
        this.heroeList = this.heroes;
      }
    });
  }
}