import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVideoComponent } from './create-video/create-video.component';
import { EditComponent } from './edit/edit.component';
import { HomeVideosComponent } from './home-videos/home-videos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VideoComponent } from './video/video.component';
import { VideocardComponent } from './videocard/videocard.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"loginsuccess",
    component:LoginsuccessComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"sidebar",
    component:SidebarComponent
  },
  {
    path:"topbar",
    component:TopbarComponent
  },
  {
    path:"videos",
    component:VideosComponent
  },
  {
    path:"videocard",
    component:VideocardComponent
  },
  
    {
      path:'video-create',
      component:CreateVideoComponent
    },
    {
      path:"homevideos",
      component:HomeVideosComponent
    },
    {
      path:"video/:id",
      component:VideoComponent
    },
    {
      path:"video/edit/:id",
      component:EditComponent
    },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
