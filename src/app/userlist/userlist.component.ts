import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) { }
  userDetails: any;
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.apiService.getUserList().subscribe(res => {
      this.userDetails = res.data;
      console.log(res.data);

    })
  }

  postDetail(id: any) {
    this.router.navigate(['/userpost', id]);
    console.log(id);

  }



}
