import { BaseClass } from "./base/base-class";
import { EffectionDescription } from "./effection-description";
import { Pokemon } from "./pokemon";

export class AbilitiesDetails {
    id: number;
    effect_entries: EffectionDescription [];
    generation: BaseClass;
    name: string;
    pokemon: Pokemon [];

    constructor(id: number, name: string, generation: BaseClass, effect_entries : EffectionDescription [], pokemon: Pokemon[]) {
        this.id = id;
        this.name = name;
        this.generation = generation;
        this.effect_entries = effect_entries;
        this.pokemon = pokemon;
    }
}
