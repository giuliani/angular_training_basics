import { Component, OnInit } from '@angular/core';
import { DarkService } from '../../services/dark.service';

@Component({
  selector: 'app-sith-list',
  templateUrl: './sith-list.component.html',
  styleUrls: ['./sith-list.component.css']
})
export class SithListComponent implements OnInit {

	characters = null;

  constructor(private darkService: DarkService) { 
  		this.characters = darkService.getLordSiths();
  }

  ngOnInit() {
  }

}
