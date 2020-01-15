import {Component, Input, OnInit} from '@angular/core';
import {Album} from '../../models/json-placeholder.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() albums: Album[];

  constructor() {
  }

  ngOnInit() {
  }

  public getInitials(title: string): string {
    if (title) {
      return title.substr(0, 1);
    }
    return undefined;
  }

}
