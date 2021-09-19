import {Component, OnDestroy} from "@angular/core";
import {WalletService} from "../wallet-service";
import {WalletModel} from "../../models/wallet-model";
import {Route, Router} from "@angular/router";

@Component({
  selector:"app-wallets",
  templateUrl:"./wallets.component.html",
  styleUrls:["./wallets.component.scss"]
})
export class WalletsComponent implements OnDestroy{

  title = "Wallet List"

  wallets : WalletModel.WalletItem[]=[];

  selectedWallet: WalletModel.WalletItem | undefined;

  private sub:any;

  //ilk constructor sonra on init çalışır
  constructor(private walletService:WalletService, private router:Router) {
  }

  ngOnInit(){
//observable olduğu için direk istediğimiz değişkene atayamayız o yüzden subcribe etmemiz gerekiyor.
    this.sub = this.walletService.getWallets().subscribe(wallets=>{
      this.wallets = wallets;

    })

  }

  openDetail(id:number){
    this.router.navigate(["wallets/"+id])

  }

  ngOnDestroy(): void {//walletlerde wallet detailse tıkladıktan sonra walletlerin listelendiği sayfa destroy edilir.Bu sayede sayfa daha hızlı çalışır.

    this.sub.unsubcribe();//bunu dediğimiz anda bu yukarıdaki subcribeyi kırıyor. Eğer bunu yapmazsak yukarıdaki subcribe sayfadan geri veya çıkış yaptığımız ahlde dinlenöeye devaö edicek."
  }

}
