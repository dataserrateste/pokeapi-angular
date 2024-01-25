import { Move } from "./move";
import { Moves } from "./moves";
import { Sprites } from "./sprites";
import { Stats } from "./stats";
import { Types } from "./types";

export class Pokemon {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    weight: number;
    details: any;
    types: Types [];
    stats: Stats [];
    sprites: Sprites;
    url: string;
    moves: Moves [];
  
    constructor(id: number, name: string, baseExperience: number, height: number, 
      weight: number, details: any, types: Types[], stats: Stats [], sprites: Sprites, url: string, moves: Moves []) {
      this.id = id;
      this.name = name;
      this.baseExperience = baseExperience;
      this.height = height;
      this.weight = weight;
      this.details = details;
      this.types = types;
      this.stats = stats;
      this.sprites = sprites;
      this.url = url;
      this.moves = moves;
    }
}
