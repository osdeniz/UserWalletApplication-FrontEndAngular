import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WalletsComponent} from "./wallets/wallets.component";

const routes :Routes=[{
  path:"",component:WalletsComponent//walletcomponenti çağırır. Buraya gelir ve bu componenti çalıştırır.Ve wallet component html tarafını yükler.

}]


@NgModule({//routing modulü ng module tanımmamaız gerekiyor
  imports:[RouterModule.forChild(routes)],//child diyoruz çünkü appmodule geliyor istekler appmodulden alt modulleredallanıyor
  exports:[RouterModule]


  })
export class WalletRoutingModule{


}
