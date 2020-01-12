import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { InitialState } from 'src/app/store/reducer';
import { FindInLibrary } from 'src/app/store/actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue;
  @select('booksFound') books$: Observable<Array<any>>;
  constructor(
    private ngRedux: NgRedux<InitialState>
  ) { }

  ngOnInit() {
    this.ngRedux.dispatch(FindInLibrary({}));
  }

  searchForABook(name): void {
    this.searchValue = name;
    this.ngRedux.dispatch(FindInLibrary({ name }));
    // this.ngRedux
    //   .select<Array<any>>('booksFound')
    //   .subscribe();
  }
}
