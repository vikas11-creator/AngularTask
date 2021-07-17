import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { DatePipe } from '@angular/common';
import { CommentModel } from '../model/comment.model';
import { PostModel } from '../model/post.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {
  createFormPost: FormGroup;
  requestSubmitClicked = false;
  iscomment: string;
  isDismiss: string;
  userComments: any;
  commentModelList: CommentModel[] = [];
  userPosts: PostModel[] = [];
  showDateTime: boolean = false;
  time = { hour: 13, minute: 30 };

  selectedDate: any;
  public mytime: Date = new Date();
  minTime: any;

  currentYear: any = this.mytime.getFullYear();
  currentDate: any = this.mytime.getDate() - 1;
  currentMonth: any = this.mytime.getMonth() + 1;
  public myOptions: IAngularMyDpOptions = {
    disableUntil: { year: this.currentYear, month: this.currentMonth, day: this.currentDate },
    dateRange: false,
    dateFormat: 'dd/mm/yyyy'
  };
  constructor(private apiService: ApiService, private route: ActivatedRoute, private _fb: FormBuilder, private datePipe: DatePipe, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUserPost();
    this.minTime = this.datePipe.transform(new Date(), 'hh:mm a');
    this.setForms();
  }

  getUserPost() {
    this.apiService.getUserPost(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.userPosts = res.data;
      console.log(res.data);

    })
  }

  loadComment(id: String, index: number) {


    this.apiService.getUserComments(id).subscribe(res => {

      console.log(JSON.stringify(res));
      this.userPosts[index].comments = res.data;
      this.userPosts[index].isCommentOpen = true;
      this.iscomment = 'true';
    })
  }

  onSave() {

    if (this.createFormPost.invalid) {
      this.createFormPost.markAllAsTouched();
      this.requestSubmitClicked = true;
      setTimeout(() => this.requestSubmitClicked = false, 500);
      return;
    }
    this.toastr.success('Success', 'Post Added Sucessfully');



  }
  setForms() {
    let model2: IMyDateModel = { isRange: false, singleDate: { jsDate: new Date() }, dateRange: null };
    this.createFormPost = this._fb.group({
      input_name: [''],
      input_email: ['', Validators.compose([Validators.required, Validators.email])],
      input_title: ['', Validators.compose([Validators.required, Validators.maxLength(15)])],
      input_body: [''],
      publish_date: this._fb.control(model2, Validators.required),
      publish_time: [this.minTime, Validators.required]

    })
  }
  updateText() {
    this.showDateTime = !this.showDateTime;
  }

}
