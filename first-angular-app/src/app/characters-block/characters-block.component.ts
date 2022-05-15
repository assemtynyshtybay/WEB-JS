import { Component, OnInit, OnChanges, DoCheck, SimpleChanges, Input } from '@angular/core';
import {Character} from '../types/index';
@Component({
  selector: 'app-characters-block',
  templateUrl: './characters-block.component.html',
  styleUrls: ['./characters-block.component.css']
})
export class CharactersBlockComponent implements OnInit, OnChanges {
  
  @Input() offsetPage: number | undefined;

  characters: Character[] = []

  ngOnInit(){
    fetch(`https://breakingbadapi.com/api/characters?limit=10&offset=${this.offsetPage}`).then((res)=>res.json()).then((data)=>{
      console.log('data',data);
      this.characters = data;
    })
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }
  // ngDoCheck() {
  //   console.log("rendering")
  //   this.ngOnInit();
  // } 

}
