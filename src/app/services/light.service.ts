import {Injectable} from "@angular/core";
@Injectable()
export class LightService{
  characters = ['Obi Wan Kenobi', "Luke Skywalker", "Yoda"];

  public getJedis(){
    return this.characters;
  }
}