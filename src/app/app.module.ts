import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import {AuthModule} from '././domain/auth/auth.module';
import { DashboardComponent } from './domain/home/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoryComponent } from './domain/category/category.component';
import { CommentComponent } from './domain/comment/comment.component';
import { PostComponent } from './domain/post/post.component';
import { UserComponent } from './domain/user/user.component';
import { VedioComponent } from './domain/video/vedio.component';
import { ContentnotfoundComponent } from './domain/contentnotfound/contentnotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    CategoryComponent,
    CommentComponent,
    PostComponent,
    UserComponent,
    VedioComponent,
    ContentnotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
