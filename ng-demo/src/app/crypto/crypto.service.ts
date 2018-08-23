import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export  type coin = {
  name: string;
  symbol: string;
  value: number
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  coins: coin []= [];

  constructor(public http: HttpClient) {
  }

  fetchCryptoPrices() {
    this.http.get<any[]>('https://api.coinmarketcap.com/v1/ticker/')
      .subscribe((r: any[]) => {
        this.coins = r.map(coin => mapAnyToCoin(coin));
        console.log(this.coins);
      });
  }
}
function mapAnyToCoin(coin:any):coin{
  return {
    name:coin.name,
    symbol:coin.symbol,
    value:coin.price_usd
  }
}
