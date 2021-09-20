
export namespace WalletModel{

  export interface WalletDto{

  }

  export interface WalletItem{//burda czdanımızn hangi bilgileri varsa onları giriyoruz. Typscript tarafında number tip olarak hepsini kapsar. longu flodu vs.
    id:number,
    name?:string,
    description?:string,
    accountNumber?:number,
    currenciesTypeUsdt?:number,
    currenciesTypeBtc?:number,
    currenciesTypeEth?:number,
    currenciesTypeTl?:number,
    currentBalance?:number,
    transactions?:number,
    createDate?:Date

  }


}
