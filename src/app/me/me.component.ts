import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onWheel(event: WheelEvent): void {
    //(<Element>event.target).parentElement.scrollLeft += -40;

    

    if(event.deltaY < 0) document.getElementById('listMe').scrollLeft -= 40;
    else if (event.deltaY > 0) document.getElementById('listMe').scrollLeft += 40;
    event.preventDefault();

    let pos = document.getElementById('listMe').scrollLeft + document.getElementById('listMe').offsetWidth;
    let max = document.getElementById('listMe').scrollWidth;
    // console.log(pos-max);
    // console.log(max-pos);

    if(((pos - max) < 1 && (pos - max) > -1) || ((max - pos) < 1 && (max - pos) > -1))   {
      console.log("Max Reached!");
      this.userService.user.notes = this.userService.user.notes.concat(this.userService.user.notes);
      console.log(this.userService.user.notes);
    }
 }
}
