import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/app/services/github/github.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  username: string; // unefined
  user: any; //unefined

  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.username = params.get('username')
    })
    this.githubService.getUser(this.username).subscribe((user) => {
      this.user = user
    })
  }



}
