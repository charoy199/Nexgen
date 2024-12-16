import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { CreateeventsComponent } from './createevents/createevents.component';
import { EventComponent } from './event/event.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' }, // Redirect root to signin
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'createevents', component: CreateeventsComponent},
  { path: 'event', component: EventComponent},
  { path: 'sidenav', component: SidenavComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: '', redirectTo: 'placeholder', pathMatch: 'full' },    // Route for signin
];
