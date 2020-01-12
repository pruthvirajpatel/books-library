import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from 'src/app/store/reducer';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(
    private ngRedux: NgRedux<InitialState>
  ) { }

  getAllBooks() {
    // this.ngRedux.dispatch()
  }
}
