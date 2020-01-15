import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JsonPlaceholderService} from '../../services/json-placeholder.service';
import {Subscription} from 'rxjs';
import {Album, Post, User} from '../../models/json-placeholder.model';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  public user: User;
  public userPosts: Post[];
  public userAlbums: Album[];
  private subscriptions: Subscription = new Subscription();

  constructor(private readonly route: ActivatedRoute, private readonly service: JsonPlaceholderService) {
  }

  ngOnInit() {
    let userId: number;
    this.route.queryParams
      .pipe(filter(params => params.id))
      .subscribe(params => {
        userId = Number(params.id);
      });
    this.subscriptions.add(
      this.service.getUser(userId).subscribe((user: User) => {
        this.user = user;
      })
    );
    this.subscriptions.add(
      this.service.getUserAlbums(userId).subscribe((albums: Album[]) => {
        console.log(albums);
        this.userAlbums = albums;
      })
    );
    this.subscriptions.add(
      this.service.getUserPosts(userId).subscribe((posts: Post[]) => {
        this.userPosts = posts;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
