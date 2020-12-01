import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamLocsService {

  constructor() { }

  private _loc: any;

  set loc(l: any) {
    this._loc = l;
  }

  get loc(): any {
    const tmp: any = this._loc;
    this._loc = undefined;
    return tmp;
  }
}
