import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memain',
  templateUrl: './memain.component.html',
  styleUrls: ['./memain.component.css']
})
export class MemainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onWheel(event: WheelEvent): void {
    //(<Element>event.target).parentElement.scrollLeft += -40;
    if(event.deltaY < 0) document.getElementById('listMe').scrollLeft -= 40;
    else if (event.deltaY > 0) document.getElementById('listMe').scrollLeft += 40;
    event.preventDefault();
 }

}
