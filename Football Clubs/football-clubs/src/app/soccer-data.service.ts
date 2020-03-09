import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoccerDataService {
    API_KEY ='e1291240e451f98a501609a8d785906daab789b251b04cb7c69e01672304411b';
  constructor(
    private httpClient: HttpClient
  ) { }

  getSports() {
    return this.httpClient.get(`https://allsportsapi.com/admin&apiKey=${this.API_KEY}`);
  }

  
}
