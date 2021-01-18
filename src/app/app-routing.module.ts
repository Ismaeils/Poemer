import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/guards/auth-guard.service';
import { AuthService } from './auth/services/auth.service';
import { FrontComponent } from './front/front.component';
import { SettingsComponent } from './header/settings/settings.component';
import { MeComponent } from './me/me.component';
import { MemainComponent } from './me/memain/memain.component';
import { NoteComponent } from './me/note/note.component';
import { AudioResolver} from './services/audio-resolver.service';
const routes: Routes = [

  {path: 'me', component: MeComponent,canActivate:[AuthGuard], children:[
    {path: '', component: MemainComponent},
    {path: 'note/:id', component: NoteComponent}
  ]},
  {path: '', component: AppComponent, resolve: { songs: AudioResolver }, children: [
    {path: '', component: FrontComponent}
  ]}
  //{path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AudioResolver]
})
export class AppRoutingModule { }
