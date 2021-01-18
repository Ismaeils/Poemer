import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Note } from '../models/note.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    
  }
  isNote:boolean;
  animal: string;
  name: string;
  user:User;

  constructor(private userService:UserService, public dialog: MatDialog, public router: Router) {
    router.events.subscribe((val) => {
      if(this.router.url === '/me') this.isNote = false;
    else this.isNote = true;
  });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  navigateToMyNotes(){
    this.router.navigate(['me']);
  }

  addNewNote(){
    let note = new Note(150, "", "");
    this.userService.user.notes.unshift(note);
    this.router.navigate(['me/note/' + note.id]);
  }
}
