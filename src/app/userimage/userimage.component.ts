import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userimage',
  templateUrl: './userimage.component.html',
  styleUrls: ['./userimage.component.css']
})
export class UserimageComponent implements OnInit {
userImage:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserProfile().subscribe(images=>{
      this.userImage=images.message;
      
    })
  }


}
