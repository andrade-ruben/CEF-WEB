import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { EmailComponent } from './email/email.component';
import { FormsComponent } from './forms/forms.component';
import { EventsComponent } from './events/events.component';
import { DonationsComponent } from './donations/donations.component';
import { MediaComponent } from './media/media.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'message', component: MessageComponent},
  {path:'email', component:EmailComponent},
  {path:'forms', component:FormsComponent},
  {path:'events', component:EventsComponent},
  {path:'donations', component:DonationsComponent},
  {path:'media', component:MediaComponent},
  {path:'resources', component:ResourcesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
