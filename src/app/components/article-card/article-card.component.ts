import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleCard } from './article-card';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  article: ArticleCard;
  constructor() { }

  ngOnInit() {
  }

}
