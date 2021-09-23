import { Component } from '@angular/core';
import {CrossService} from "./services/cross-service";
import {WalletService} from "./wallet/wallet-service";
import {ActivationStart, NavigationStart, Router} from "@angular/router";
import {WalletModel} from "./models/wallet-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  search = '';
  status = false;

  wallet:WalletModel.WalletItem[]=[]

  constructor(private crossService:CrossService,private walletService:WalletService,private router:Router) {

    router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
        if(event.url.indexOf('users') > -1){
          this.status = false;
        }else if(event.url.indexOf('wallets')){
          this.status = true;
        }
      }

      if (event instanceof ActivationStart){
        if(event.snapshot.data.page == 'list'){
          this.searchWallets();
        }
      }
    })
  }

  ngOnInit(){
this.walletService.getAllList().subscribe(m=>{this.wallet = m})

  }


  searchWallets(){
    if(this.search.length > 0){
      this.walletService.search(this.search).subscribe((res)=>{
        this.crossService.setWallets(res);
        this.router.navigate(['wallets'])
      });
    }else {
      this.walletService.getWallets().subscribe(res=>{

        this.crossService.setWallets(res);
      })
    }
  }


}
