import { DragonballService } from './../../services/dragonball.service';
import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  public dragonballService = inject(DragonballService);
}
