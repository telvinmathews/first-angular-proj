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
  servers = ['Testserver', 'Testserver'];


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
    this.serverCreationStatus = "Sever was created!" + " " + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
