import {NgModule} from "@angular/core";
import {WalletsComponent} from "./wallets/wallets.component";
import {CommonModule} from "@angular/common";
import {WalletRoutingModule} from "./wallet-routing.module";

//module oldunu tanımlamak için ngmodule anatasyonu kulalndık
@NgModule({
  declarations:[WalletsComponent],//componentleri bu module tanımlaak için declarations fieldi kulalndık.Bu arreydir.
  imports:[CommonModule,WalletRoutingModule]//module oluitururken belli başlı modullere ihtiyaç var bu import edilen kütüphaneden genel modulleri çekebiliyoruz ng,ngfor,form elemanları gibi.


})
export class WalletModule{//yazdığımız modülü burda tanımlamamız gerekiyor

}
