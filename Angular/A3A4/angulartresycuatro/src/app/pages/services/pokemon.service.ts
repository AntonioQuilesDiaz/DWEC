import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from "./global";
import { pokemon } from "src/app/models/pokemon";

@Injectable()
export class PokeService {

  public url: String;

  constructor(private _http: HttpClient){
    this.url = Global.url;
  }

  getpokemon():Observable<any>{
    return this._http.get(this.url+'/')
  }
}

