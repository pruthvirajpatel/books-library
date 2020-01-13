import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from 'src/app/store/reducer';
import { AddToLibrary, EditBookInLibrary, FindInLibrary } from 'src/app/store/actions';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

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
  id;
  values;
  constructor(
    private fb: FormBuilder, private ngRedux: NgRedux<InitialState>,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.id = this.route.params['value'] && this.route.params['value'].id;
    if (this.id) {
      this.ngRedux.dispatch(FindInLibrary({ id: this.id }));
      this.ngRedux
        .select<Array<any>>('booksFound')
        .subscribe(value => {
          if (value) {
            this.createForm(value[0]);
          } else {
            this.createForm();
          }
        });
    } else {
      this.createForm();
    }
  }

  createForm(value = {}): void {
    this.booksForm = this.fb.group({
      // tslint:disable-next-line:no-string-literal
      name: [value['name'] || '', Validators.required],
      // tslint:disable-next-line:no-string-literal
      description: [value['description'] || ''],
      // tslint:disable-next-line:no-string-literal
      count: [value['count'] || '', Validators.required],
      // tslint:disable-next-line:no-string-literal
      author: [value['author'] || '', Validators.required],
      // tslint:disable-next-line:no-string-literal
      id: [value['id'] || '']
    });
  }

  addBook(): void {
    const postData = this.booksForm.getRawValue();
    if (this.id) {
      this.ngRedux.dispatch(EditBookInLibrary(postData));
    } else {
      delete postData.id;
      this.ngRedux.dispatch(AddToLibrary(postData));
    }
    this.router.navigate(['books']);
  }
}
