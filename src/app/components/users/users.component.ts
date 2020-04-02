import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github/github.service';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  //variable decalration
  users: User[];

  // injecting the github Sevice
  constructor(private githubService: GithubService, private router: Router) { }

  ngOnInit(): void {
    // subsscribe to the service and get back results from the get method
    // Initialize the results with variable declared
    this.githubService.getUsers().subscribe((users) => {
      // this.users.map((user) => user.name)
      this.users = users.slice(0, 11)
      console.log(this.users)
    })
  }

  onClickProfile(username) {
    this.router.navigate(['users', username])
  }

}
