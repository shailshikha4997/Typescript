import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentnotfoundComponent } from './domain/contentnotfound/contentnotfound.component';
import { PostComponent } from './domain/post/post.component';
import { UserComponent } from './domain/user/user.component';
import { VedioComponent } from './domain/video/vedio.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


const routes: Routes = [

  {
    path: '',loadChildren:()=>import('./domain/auth/auth.module').then(m=>m.AuthModule)
  },
  {path:'sidebar', component: SidebarComponent},
  {path:'user',component: UserComponent},
  {path:'post',component: PostComponent},
  {path:'video',component: VedioComponent},
  {path:'**', component: ContentnotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
