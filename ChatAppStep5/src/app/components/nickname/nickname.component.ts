import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  public nickname: string;
  public message: string;

  constructor() { }

  public ngOnInit(): void {
  }

  public createNickname(value: string): void {
    // alert(value);
    Person.Nickname = value;
    this.message = 'nickname wurde erfolgreich erstellt...';
  }
}
