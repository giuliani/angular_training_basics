import { Component, OnInit } from '@angular/core';
import { LightService } from '../../services/light.service';

@Component({
  selector: 'app-jedi-list',
  templateUrl: './jedi-list.component.html',
  styleUrls: ['./jedi-list.component.css']
})
export class JediListComponent implements OnInit {

  characters = null;

  constructor(private lightService: LightService) {
      this.characters = lightService.getJedis();
  }

  ngOnInit() {
  }

}
