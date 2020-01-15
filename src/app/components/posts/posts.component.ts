import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/json-placeholder.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() posts: Post[];

  constructor() {
  }

  ngOnInit() {
  }

}
