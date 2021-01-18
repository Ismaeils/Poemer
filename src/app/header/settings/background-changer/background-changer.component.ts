import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../settings.component';

@Component({
  selector: 'app-background-changer',
  templateUrl: './background-changer.component.html',
  styleUrls: ['./background-changer.component.css']
})
export class BackgroundChangerComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BackgroundChangerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
