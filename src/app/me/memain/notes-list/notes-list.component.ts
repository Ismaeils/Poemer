import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes:Note[];
  @ViewChild(CdkVirtualScrollViewport)
  viewport: CdkVirtualScrollViewport;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.notes = this.userService.user.notes;
  }
  offset = new BehaviorSubject(null);
  infinite: Observable<any[]>;
  theEnd = false;

  nextBatch(e,offset){
    if(this.theEnd){
      return;
    }
    const end = this.viewport.getRenderedRange().end;
    const total = this.viewport.getDataLength();

    if(end === total){
      this.offset.next(offset);
    }
  }
  
  getBatch(){
    return this.userService.user.notes;
  }
}
