import {Component} from "@angular/core";
import {WalletService} from "../wallet-service";
import {WalletModel} from "../../models/wallet-model";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {find} from "rxjs/operators";

@Component({//componnet olduğunu belirtmek için component anatasyonu koyuyoruz
  selector:'app-wallet-detail',//selektör bilgisi üzerinden html de çaırma yapılır
  templateUrl:'./wallet-detail.component.html',//pathini urlsini veriyoruz ilerde routers de buraya bağlanmış olucaz
  styleUrls:['./wallet-detail.component.scss']
})

export class WalletDetailComponent{
  walletItem:WalletModel.WalletItem | undefined;
  constructor(private walletService:WalletService,private activatedRoute:ActivatedRoute){

  }
  ngOnInit(){
//subcribe işlemi sayfaları yavaşlatabilir. Component destroy olduğu anda subcribeyi unsubcribe etmemiz gerekiyor.
    const params = this.activatedRoute.snapshot.params;
    const walletId = params.id;
//walletservice.walletdetails yaptık.İçerisine walletıd verdik. Burası subcribe olduktan sonra hangi değişkeni belirlediysek onu atıycak
    //this.walletItem =  this.walletService.getWallets().(item=>item.id == walletId);


    this.walletService.getWalletDetail(walletId).subscribe(wallet=>{//service katmanında yazdığımız wallet detailsi çağırdık
      this.walletItem = wallet;
    });

  }


}
