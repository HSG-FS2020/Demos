import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';
import { ChatMessage } from '../../shared/models/chat-message';
import { Person } from 'src/app/shared/models/person';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {
  public history: string;
  public histories: ChatMessage[];

  constructor(private chatService: ChatService) { }

  public ngOnInit(): void {
    setInterval(() => {
      this.getHistory();
    }, 1000);
  }

  public itsMe(nickname: string): boolean {
    if (!Person?.Nickname) {
      return false;
    }

    return Person.Nickname.toLowerCase() === nickname.toLowerCase();
  }

  private getHistory(): void {
    this.chatService.getHistory()
      .subscribe((response: ChatMessage[]) => {
        this.history = '';

        for (const history of response.reverse()) {
          const date = new Date(history.date);
          // this.history += `${history.nickname}:\n(${date.toLocaleString('de')})\n${history.message} \n`;
          this.history += `${history.nickname}:<br>(${date.toLocaleString('de')})<br>${history.message}<br>`;

        }
        this.histories = response.reverse();
      },
        (error: any) => {
          console.log(error);
        });
  }
}
