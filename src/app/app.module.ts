import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './me/note/note.component';
import { NotesListComponent } from './me/memain/notes-list/notes-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NoteItemComponent } from './me/memain/notes-list/note-item/note-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { SettingsComponent } from './header/settings/settings.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { FrontComponent } from './front/front.component';
import { MeComponent } from './me/me.component';
import { MemainComponent } from './me/memain/memain.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/guards/auth-guard.service';
import { UserService } from './services/user.service';
import { BackgroundChangerComponent } from './header/settings/background-changer/background-changer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoteComponent,
    NotesListComponent,
    NoteItemComponent,
    SettingsComponent,
    FrontComponent,
    MeComponent,
    MemainComponent,
    BackgroundChangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
