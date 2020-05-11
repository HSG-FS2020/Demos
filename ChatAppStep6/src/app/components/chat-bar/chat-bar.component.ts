import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/shared/models/person';
import { ChatService } from 'src/app/shared/services/chat.service';
import { ChatMessage } from 'src/app/shared/models/chat-message';

@Component({
  selector: 'app-chat-bar',
  templateUrl: './chat-bar.component.html',
  styleUrls: ['./chat-bar.component.css'],
})
export class ChatBarComponent implements OnInit {
  // @Output() public submitMessage = new EventEmitter<string>();

  public chatMessage: string;

  constructor(private chatService: ChatService) { }

  public ngOnInit(): void { }

  public addMessage(message: string): void {
    if (!message) {
      alert('Bitte Text erfassen!');
      return;
    }

    if (!Person.Nickname) {
      alert('Bitte Nickname erfassen!');
      return;
    }

    const timestamp: string = new Date().toLocaleDateString('de');
    // const messageToSend = `<p class='nickname'>${Person.Nickname}<p><p>${message} - ${timestamp}<p>`;

    const messageToSend = new ChatMessage();
    messageToSend.message = message;
    messageToSend.nickname = Person.Nickname;

    this.chatService.addToHistory(messageToSend).subscribe((response: ChatMessage) => {
      this.chatMessage = '';
    },
      (error: any) => {
        console.log(error);
      });

  }
}
