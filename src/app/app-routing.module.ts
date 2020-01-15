import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  }, {
    path: 'user',
    component: UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
