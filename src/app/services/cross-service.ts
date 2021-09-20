import {Injectable,EventEmitter} from "@angular/core";

import WalletItem = WalletModel.WalletItem;
import {WalletModel} from "../models/wallet-model";



@Injectable({
  providedIn:'root'
})
export class CrossService{
  walletUpload = new EventEmitter<WalletItem[]>();

  setWallets(wallets:WalletItem[]){
    this.walletUpload.emit(wallets);
  }
}
