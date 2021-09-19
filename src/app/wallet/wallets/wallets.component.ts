import {Component} from "@angular/core";

@Component({
  selector:"app-wallets",
  templateUrl:"./wallets.component.html",
  styleUrls:["./wallets.component.scss"]
})
export class WalletsComponent {

  title = "Wallet List"

  //ilk constructor sonra on init çalışır
  constructor() {
  }

  ngOnInit(){

  }

}
