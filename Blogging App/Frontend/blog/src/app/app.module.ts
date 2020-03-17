import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { FooterComponent } from './footer/footer.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { ArticleService} from './service/article.service';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleHeaderComponent,
    BlogHomeComponent,
    FooterComponent,
    ViewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
