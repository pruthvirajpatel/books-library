import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { InitialState } from 'src/app/store/reducer';
import { AddToLibrary } from 'src/app/store/actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @select('books') books$: Observable<Array<any>>;
  constructor(
    private ngRedux: NgRedux<InitialState>,
    private router: Router
  ) { }

  ngOnInit() {
  }

  edit(index): void {
    this.router.navigate(['add', { id: index }]);
  }
}
