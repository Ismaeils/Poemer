import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note:Note;
  
  constructor(public router: Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  navigateToNote(){
    this.router.navigate(['me/note/' + this.note.id]);
  }

  deleteNote(){
    let index = this.userService.user.notes.findIndex(x => x.id === this.note.id);
    this.userService.user.notes.splice(index, 1);
  }

}
