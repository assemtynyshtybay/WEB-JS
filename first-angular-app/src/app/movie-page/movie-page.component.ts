import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  offsetPage: number = 0
  name:string = "Assem"

  constructor() { }

  onChoosePage(event: any){
    console.log(event)
    this.offsetPage = event.pageIndex*10;
    console.log(this.offsetPage)
  }

  ngOnInit(): void {
  }

}
