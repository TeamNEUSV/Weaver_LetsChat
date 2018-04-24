import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomePageComponent} from './components/home/home-page/home-page.component';
import {HomeEventComponent} from './components/home/home-event/home-event.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {EventListComponent} from './components/event/event-list/event-list.component';
import {EventNewComponent} from './components/event/event-new/event-new.component';
import {EventEditComponent} from './components/event/event-edit/event-edit.component';
import {EventAttComponent } from './components/event/event-att/event-att.component';
import { PersonComponent } from './components/event/event-att/person/person.component';
import { MessageComponent } from './components/event/event-att/person/message/message.component';
import { InboxComponent } from './components/user/inbox/inbox.component';


const APP_ROUTES: Routes = [
  { path : '', component : HomePageComponent},
  { path : 'Home_event', component : HomeEventComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent },
  { path : 'user/:uid' , component: ProfileComponent},
  { path : 'user/:uid/inbox' , component: InboxComponent},
  { path : 'user/:uid/event' , component: EventListComponent},
  { path : 'user/:uid/event/new' , component: EventNewComponent},
  { path : 'user/:uid/event/:eid/edit', component: EventEditComponent},
  { path : 'user/:uid/event/:eid/attendee' , component: EventAttComponent},
  { path : 'user/:uid/event/:eid/attendee/:aid' , component: PersonComponent},
  { path : 'user/:uid/event/:eid/attendee/:aid/:mid' , component: MessageComponent},
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);