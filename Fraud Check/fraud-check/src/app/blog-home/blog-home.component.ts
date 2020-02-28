import { Component, OnInit } from '@angular/core';

import {ArticleService} from '../service/article.service';
@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
  article:any=[];
  //inject service
  constructor(private articleService:ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe(
      res => {
        for(let key in res){
          this.article.push(res[key]);
        }
      },
      err => {
        console.log("Error occured");
      }
    );
  }

}
