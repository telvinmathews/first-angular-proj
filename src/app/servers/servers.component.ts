import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  username = 'username';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et venenatis neque. Vestibulum nibh libero, gravida sit amet tellus non, vestibulum congue augue. Donec euismod ex quam, sit amet aliquet leo accumsan in. Nullam quis eros elementum, sagittis tortor ut, tempor ipsum.';
  count = 0;
  numbers = [];

  constructor() {
    setTimeout(() => {
      this.allowServer = true
    }, 2000)
  }

  usernameRest() {
    this.username = ''
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Sever was created!" + " " + this.serverName;
  }

  checkIfGreaterThanFive() {
    for (let i = 0; i < this.numbers.length; i++) {
      if (i >= 5) {
        return true;
      }
      return false;
    }
  }

  changeBackGroundColor() {
    return 'blue';
  }
  changeFontColor() {
    return 'white';
  }




  logCount() {
    // const currentNumber = this.count++;
    // console.log(currentNumber);
    this.numbers.push(this.numbers.length + 1);
    console.log(this.numbers);
  }

  displayDetails() {
    this.logCount();
    if (this.paragraph === '') {
      this.paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et venenatis neque. Vestibulum nibh libero, gravida sit amet tellus non, vestibulum congue augue. Donec euismod ex quam, sit amet aliquet leo accumsan in. Nullam quis eros elementum, sagittis tortor ut, tempor ipsum.';
    } else {
      this.paragraph = '';
    }
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
