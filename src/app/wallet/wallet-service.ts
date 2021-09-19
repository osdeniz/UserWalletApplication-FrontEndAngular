import {Injectable} from "@angular/core";
import {WalletModel} from "../models/wallet-model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn:'root'
})
export class WalletService{

  constructor(private httpClient:HttpClient) {//http clienti inject ettik
  }

  getWallets():Observable<WalletModel.WalletItem[]>{//bu fonksiyon database deki tüm cüzdanları döndüren fonksyion. tüm http client istekleri observable tipinde olur.
    return this.httpClient.get<WalletModel.WalletItem[]>( environment.api + "/wallet/allList")//environment apiden import ettik. Sabit apimizi environment apimizde sakladık.
  }

  getWalletDetail(id:number):Observable<WalletModel.WalletItem>{//tek ir obje döneceği için arrey koymadık. Burayı walletdetaile çağırmak gerkeiyor
    return this.httpClient.get<WalletModel.WalletItem>(environment.api + "/wallet" + id)
  }

  message() : string{
    return "benden selam olsun!"
  }

/*  getWallet():WalletResponse[]{
    return [{
      id:1,
      name:"wallet_1",
      description:"wallet_23_1",
      accountNumber:15,
      currenciesTypeUsdt:5,


    },{
      id:2,
      name:"wallet_1",
      description:"wallet_23_1",
      accountNumber:15,
      currenciesTypeUsdt:5,


    },{
      id:3,
      name:"wallet_1",
      description:"wallet_23_1",
      accountNumber:15,
      currenciesTypeUsdt:5,


    },{
      id:4,
      name:"wallet_1",
      description:"wallet_23_1",
      accountNumber:15,
      currenciesTypeUsdt:5,


    }]

  }*/

  }
