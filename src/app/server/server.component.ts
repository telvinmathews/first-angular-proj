import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  severId = 10;
  severStatus = 'offline';

  getId() {
    return this.severId;
  }

}
