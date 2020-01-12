import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  booksForm: FormGroup;
  constructor(private fb: FormBuilder) { }

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
    console.log(postData);
  }
}
