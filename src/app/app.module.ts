import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegisterComponent } from './register/register.component';
import { VideoComponent } from './video/video.component';
import { VideocardComponent } from './videocard/videocard.component';
import { VideosComponent } from './videos/videos.component';
import { CreateVideoComponent } from './create-video/create-video.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { HomeVideosComponent } from './home-videos/home-videos.component';
import { HomeVideocardComponent } from './home-videocard/home-videocard.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    LoginComponent,
    LoginsuccessComponent,
    RegisterComponent,
    VideoComponent,
    VideocardComponent,
    VideosComponent,
    CreateVideoComponent,
    EditComponent,
    HomeComponent,
    HomeVideosComponent,
    HomeVideocardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
