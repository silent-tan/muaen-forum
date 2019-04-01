import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticleCard } from 'app/components/article-card/article-card';
import { ARTICLES } from './mock-home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor() { }
  getMainArticles(): ArticleCard {
    return ARTICLES[0];
  }
  getSubArticles(): ArticleCard[] {
    return ARTICLES.slice(1);
  }
}
