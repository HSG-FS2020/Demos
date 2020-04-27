import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'ChatApp';
  public messageHistory = '';

  public onSubmitMessage(message: string): void {
    this.messageHistory += message;
  }
}
