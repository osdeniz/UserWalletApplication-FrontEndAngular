import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"wallets",//ilk istek buraya gelicek
    loadChildren:()=>import("./wallet/wallet.module").then(m=>m.WalletModule)//sonra buraya gelicek alt dalları var bakıcak
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
