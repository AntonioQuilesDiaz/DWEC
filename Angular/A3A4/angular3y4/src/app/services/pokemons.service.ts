import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Global } from './Global';

@Injectable()
export class PokemonService {
  public url: string;
  public type= '10';

  constructor (private http: HttpClient){
    this.url =Global.url;

  }

  getPokemons():Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8', "credentials": "omit"});
    return this.http.get(this.url+this.type,{ headers: headers, });
  }
}
