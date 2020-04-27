import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent implements OnInit {
  @Output() public submitMessage = new EventEmitter<string>();

  public chatMessage: string;

  constructor() { }

  public ngOnInit(): void { }

  public addMessage(message: string): void {
    if (!message) {
      alert('Bitte Text erfassen!');
      return;
    }

    const timestamp: string = new Date().toLocaleDateString('de');
    const messageToSend = `${message} - ${timestamp}<br>`;
    // const messageToSend = message + '-' + timestamp + '<br>';

    // alert(message);

    this.submitMessage.emit(messageToSend);

    this.chatMessage = '';
  }
}
