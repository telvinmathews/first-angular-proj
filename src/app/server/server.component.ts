import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  severId = 10;
  severStatus = 'offline';

  constructor() {
    this.severStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.severStatus === 'online' ? 'green' : 'red';
  }

  getId() {
    return this.severId;
  }

}
