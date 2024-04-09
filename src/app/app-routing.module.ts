import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from './profile/profile.component';
import { WebapiComponent } from './webapi/webapi.component';
import { SendComponent } from "./send/send.component";
import { ReceiveComponent } from "./receive/receive.component";
import { HistoryComponent } from "./history/history.component";
import { ConfigComponent } from "./config/config.component";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'webapi',
    component: WebapiComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'send',
    component: SendComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'receive',
    component: ReceiveComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'config',
    component: ConfigComponent,
    canActivate: [MsalGuard]
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
