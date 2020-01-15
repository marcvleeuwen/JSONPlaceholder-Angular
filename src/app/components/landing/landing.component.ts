import {Component, OnInit} from '@angular/core';
import {User} from '../../models/json-placeholder.model';
import {JsonPlaceholderService} from '../../services/json-placeholder.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public users: User[];
  private subscriptions: Subscription = new Subscription();

  constructor(private readonly service: JsonPlaceholderService) {
  }

  ngOnInit() {
    this.subscriptions.add(
      this.service.getUsers()
        .subscribe((users: User[]) => {
        this.users = users;
      })
    );
  }

}
