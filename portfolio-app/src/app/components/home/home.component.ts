import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/domain/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TwitterService } from 'src/app/services/twitter.service';

const defaultIdPortfolio = 2;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  portfolioNotFound: boolean;
  ready: boolean;
  portfolio: Portfolio;
  userTimeLine: any[] = [];

  constructor(private twitterService: TwitterService,
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.ready = false;
    this.loadData();

  }

  loadData() {
    this.activatedRoute.params.subscribe(params => {

      let id = params['id'];
      if (id) {
        this.getPortfolio(id);
      } else {
        this.getPortfolio(defaultIdPortfolio);
      }

    });
  }

  getPortfolio(id: number) {
    this.portfolioNotFound = false;

    this.portfolioService.getPortfolio(id)
      .subscribe((portfolio: Portfolio) => {
        if (portfolio) {

          this.portfolio = portfolio;
          this.twitterService.getTimeline(this.portfolio.twitterUserName)
            .subscribe((data: any) => {
              this.userTimeLine = data;
            })

        } else {
          this.portfolioNotFound = true;
        }

        this.ready = true;
      });

  }

  seePortfolio(id: number) {
    this.router.navigate(['/portfolio', id]);
  }

  ngOnInit() {
  }

}
