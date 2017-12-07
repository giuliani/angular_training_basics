import {Injectable} from "@angular/core";
@Injectable()
export class DarkService{
	characters = ['Darth Vader', "Darth Maul", "Darth Sidious"];

	public getLordSiths(){
		return this.characters;
	}
}