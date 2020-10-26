import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from '../domain/portfolio';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  private api_url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getPortfolio(id: number) {

    return this.http
      .get<Portfolio>(this.api_url + '/portfolio/' + id);

  }

  save(portfolio: Portfolio) {
    return this.http
      .post(this.api_url + '/portfolio', portfolio, httpOptions);
  }


}
