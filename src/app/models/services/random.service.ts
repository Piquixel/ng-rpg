import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RandomRequest, RandomResponse } from 'interfaces/random.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  private readonly _http: HttpClient = inject(HttpClient);
  private readonly _baseUrl: string = 'https://api.random.org/json-rpc/4/invoke';
  private readonly _apiKey: string = '635ecc74-cf44-44a2-a69a-3677e44f44a0';
  public get randomInteger(): Observable<RandomResponse> {
    const body: RandomRequest = {
      jsonrpc: '2.0',
      method: 'generateIntegers',
      id: new Date().getTime(),
      params: {
        apiKey: this._apiKey,
        n: 10,
        min: 0,
        max: 10,
      },
    };
    return this._http.post<RandomResponse>(this._baseUrl, body);
  }
}
