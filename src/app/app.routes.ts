import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { About } from './about/about';
import { Events } from './events/events';
import { Media } from './media/media';
import { Exploration } from './exploration/exploration';
import { Resources } from './resources/resources';
import { Programmes } from './programmes/programmes';
import { Opportunities } from './opportunities/opportunities';
import { Community } from './community/community';


export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'about', component: About },
  { path: 'events', component: Events },
  { path: 'media', component: Media },
  { path: 'exploration', component: Exploration },
  { path: 'resources', component: Resources },
  { path: 'programmes', component: Programmes },
  { path: 'opportunities', component: Opportunities },
  { path: 'community', component: Community }
];
