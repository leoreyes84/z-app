import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Portfolio } from 'src/app/domain/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: []
})
export class PortfolioComponent implements OnInit {

  form: FormGroup
  ready: boolean;
  portfolio: Portfolio;
  idPortfolio: number;

  constructor(private portfolioService: PortfolioService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.ready = false;

    this.activatedRoute.params.subscribe(params => {
      this.idPortfolio = params['id'];
      this.createForm(this.idPortfolio);

    });

  }

  ngOnInit() {
  }

  save() {
    this.portfolio.title = this.form.value.title;
    this.portfolio.description = this.form.value.description;
    this.portfolio.imageUrl = this.form.value.imageUrl;

    this.portfolioService.save(this.portfolio)
      .subscribe((response: Portfolio) => {
        console.log('Object updated id:' + response.id);
        this.router.navigate(['/home', response.id]);
      });
  }

  createForm(id: number) {

    this.portfolioService.getPortfolio(id)
      .subscribe((portfolio: Portfolio) => {
        this.portfolio = portfolio;

        this.form = this.fb.group({
          userName: [portfolio.twitterUserName, Validators.required],
          title: [portfolio.title, Validators.required],
          description: [portfolio.description, Validators.required],
          imageUrl: [portfolio.imageUrl, Validators.required]
        });

        this.ready = true;
      });
  }

  back() {
    this.router.navigate(['/home', this.idPortfolio]);
  }

  get titleEmpty() {
    return this.form.get('title').invalid;
  }

  get descriptionEmpty() {
    return this.form.get('description').invalid;
  }

  get imageEmpty() {
    return this.form.get('imageUrl').invalid;
  }

}
