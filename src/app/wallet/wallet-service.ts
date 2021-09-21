import {Injectable} from "@angular/core";
import {WalletModel} from "../models/wallet-model";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {CommonUtility} from "../utility/common-utility";

@Injectable({
  providedIn:'root'

})
export class WalletService{
  constructor(private httpClient:HttpClient) {//http clienti inject ettik
  }

  getWallets():Observable<WalletModel.WalletItem[]>{

    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.get<WalletModel.WalletItem[]>(environment.api + '/waller/alllist?userId=' + userId)
  }

  getWalletDetail(id:number):Observable<WalletModel.WalletItem>{
    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.get<WalletModel.WalletItem>(environment.api + '/wallet/' + id + '?userId=' + userId)
  }

  updateWallet(body:any):Observable<WalletModel.WalletItem>{
    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.post<WalletModel.WalletItem>(environment.api + '/wallet/createOrUpdate?userId=' + userId,body)
  }

  delete(id:number){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)

    return this.httpClient.delete(environment.api + '/wallet/' + id + '?userId=' + userId, { headers, responseType: 'text'});
  }

  search(search:string):Observable<WalletModel.WalletItem[]>{
    const jsonString = localStorage.getItem('selectedUser') || '';
    const userId = CommonUtility.getInstance().getSelectedUserId(jsonString)
    return this.httpClient.get<WalletModel.WalletItem[]>(environment.api + '/wallet/search/' + search + '?userId=' + userId)
  }

}
