import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from 'src/app/store/reducer';
import { AddToLibrary } from 'src/app/store/actions';
import { Router } from '@angular/router';

export interface Book {
  name: string;
  author: string;
  description: string;
  count: number;
}


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  booksForm: FormGroup;
  constructor(
    private fb: FormBuilder, private ngRedux: NgRedux<InitialState>,
    private router: Router) { }

  ngOnInit() {
    this.booksForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      count: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  addBook(): void {
    const postData = this.booksForm.getRawValue();
    this.ngRedux.dispatch(AddToLibrary(postData));
    console.log(postData);
    // alert('Book added');
    this.router.navigate(['books']);
  }
}
