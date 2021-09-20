import {Component, OnDestroy, OnInit} from "@angular/core";
import {WalletService} from "../wallet-service";
import {WalletModel} from "../../models/wallet-model";
import {Route, Router} from "@angular/router";
import {FormBuilder,FormGroup,Validators} from "@angular/forms";
import {CrossService} from "../../services/cross-service";
import {catchError} from "rxjs/operators";

@Component({
  selector:"app-wallets ",
  templateUrl:"./wallets.component.html",
  styleUrls:["./wallets.component.scss"]
})
export class WalletsComponent implements OnDestroy{
  wallets : WalletModel.WalletItem[]=[];
  selectedWallet: WalletModel.WalletItem | undefined;

  private subCross:any;
  form:FormGroup | undefined;
  deleteOperationMessage:any;
  operationStatus = false;


  //ilk constructor sonra on init çalışır
  constructor(private walletService:WalletService, private router:Router,private fb:FormBuilder,private crossService:CrossService) {
  }

  ngOnInit(){
//observable olduğu için direk istediğimiz değişkene atayamayız o yüzden subcribe etmemiz gerekiyor.
    this.subCross = this.walletService.getWallets().subscribe(wallets=>{
      this.wallets = wallets;
    })
  }

  openDetail(id:number){
    this.router.navigate(['wallets/'+id]);
  }

  ngOnDestroy(): void {//walletlerde wallet detailse tıkladıktan sonra walletlerin listelendiği sayfa destroy edilir.Bu sayede sayfa daha hızlı çalışır.
    this.subCross.unsubcribe();//bunu dediğimiz anda bu yukarıdaki subcribeyi kırıyor. Eğer bunu yapmazsak yukarıdaki subcribe sayfadan geri veya çıkış yaptığımız ahlde dinlenöeye devaö edicek."
  }


  edit(wallet:WalletModel.WalletItem){
    this.selectedWallet = wallet;
    this.form = this.fb.group({
      id:[wallet.id],
      title:[wallet.name,[Validators.required]],
      description:[wallet.description],
      list:[wallet.description,[Validators.required]]
    })

  }

  create(){
    this.form = this.fb.group({
      id:[null],
      title:['',[Validators.required]],
      description:[''],
      list:['',[Validators.required]]
    })
  }

  deleteModal(wallet:WalletModel.WalletItem){
    this.selectedWallet = wallet;
  }

  delete(){
    const id = this.selectedWallet?.id || -1;
    this.operationStatus = true;
    setTimeout(()=>{
      this.walletService.delete(id).pipe(catchError(err=>{
        this.operationStatus = false;

        throw err;
      })).subscribe((res)=>{
        this.operationStatus = false;
        this.deleteOperationMessage = res;

        setTimeout(()=>{
          this.deleteOperationMessage = ""
        },4000)


      })
    },1000)
  }

  newSubmit(){

    const formData = new FormData();

    if(this.form?.valid){
      this.operationStatus = true;
      let payload = {
        id:this.form?.controls['id'].value,
        title:this.form?.controls['name'].value,
        description:this.form?.controls['detail'].value,
        walletDetails:this.form?.controls['list'].value
      }

      const jsonStringPayload = JSON.stringify(payload);

    }


  }



}
