import { Component, OnInit } from '@angular/core';
import { ArticleCard } from 'app/components/article-card/article-card';
import { Observable, of } from 'rxjs';
import { HomeService } from '../home.service';
import { ARTICLES } from '../mock-home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainArticle: ArticleCard;
  subArticles: ArticleCard[];
  constructor(private service: HomeService) {
  }

  ngOnInit() {
    this.mainArticle = this.service.getMainArticles();
    this.subArticles = this.service.getSubArticles();
  }
}
