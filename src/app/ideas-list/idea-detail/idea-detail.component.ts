import { Component, OnInit,Input } from '@angular/core';
import { Idea } from '../../models/idea';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css']
})
export class IdeaDetailComponent implements OnInit {
 @Input() idea:Idea;

  constructor() { }

  ngOnInit() {
  }

}
