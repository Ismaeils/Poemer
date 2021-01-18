import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Note } from 'src/app/models/note.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  providers:[DatePipe]
})
export class NoteComponent implements OnInit {
  songs: string[];
  user:User;
  note:Note;
  index:string;
  subject: Subject<any> = new Subject();
  savedFlag:string;
  lastSave:string;
  newDate:Date;
  constructor(private route: ActivatedRoute, private userService:UserService, private datePipe: DatePipe) { }

  formatDate(date= new Date()) {
    return this.datePipe.transform(date,'MM-dd-yyyy hh:mm' );
  }

  ngOnInit(): void {
    //this.songs = this.route.snapshot.data.songs;
    //console.log(this.songs);
    
    this.subject.pipe(debounceTime(2000)).subscribe(()=>{
      //Update Database.
      console.log("Saved after 2 seconds of Inactivity");

      this.savedFlag = "Saved ";
      this.note.lastEdited = this.formatDate();
      this.updateNoteLocally();
    });

    this.user = this.userService.user;
    this.route.queryParams.subscribe(params => {
      this.index = this.route.snapshot.paramMap.get('id');
      this.note = this.user.notes.filter(note => note.id == +this.index)[0];
      if(this.note.lastEdited != ""){
        this.savedFlag = "Last Edited\n" + this.note.lastEdited.replace(' ', '\n');
      }
    });
  }

  playKeydownAudio(){
    let keydownAudio= new Audio();
    //keydownAudio.src = this.songs[0];
    keydownAudio.src = '../../assets/keydown2sped.mp3';
    keydownAudio.load();
    keydownAudio.volume = 0.3;
    keydownAudio.play();
  }
  @HostListener('document:keydown', ['$event'])
  keyPress(event: any) {
    if(this.user.typewriterSound == true){
      this.playKeydownAudio();
    }
  }

  updateNoteLocally(){
    this.user.notes.filter(note => note.id == +this.index)[0] = this.note;
  }
  onTitleUpdate(value){
    this.savedFlag = "";
    this.note.title = value;
    this.updateNoteLocally();
    this.subject.next();
  }

  onBodyUpdate(value){
    this.savedFlag = "";
    this.note.body = value;
    this.updateNoteLocally();
    this.subject.next();
  }
}
