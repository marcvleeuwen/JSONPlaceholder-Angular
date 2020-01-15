import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostsComponent} from './components/posts/posts.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {GalleryComponent} from './components/gallery/gallery.component';
import {ImagesComponent} from './components/images/images.component';
import {LandingComponent} from './components/landing/landing.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {MatCardModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UserDetailsComponent,
    GalleryComponent,
    ImagesComponent,
    LandingComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //  angular material
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
