import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { BackgroundChangerComponent } from './background-changer/background-changer.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  panelOpenState = false;
  user:User;

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BackgroundChangerComponent, {
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private userService: UserService) {

    }

  updateUserSettings(checked){
    this.user.typewriterSound = checked;
    this.userService.user = this.user;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
