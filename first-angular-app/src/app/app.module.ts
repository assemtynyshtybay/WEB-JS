import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatFormFieldModule, MatInputModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { CharactersBlockComponent } from './characters-block/characters-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterCardComponent } from './character-card/character-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MoviePageComponent } from './movie-page/movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersBlockComponent,
    CharacterCardComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
