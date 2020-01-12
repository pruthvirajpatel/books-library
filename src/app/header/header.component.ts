import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQuery;
  searchQueryUpdate = new Subject<string>();
  constructor() { }
  ngOnInit() {
    this.searchQueryUpdate.pipe(
      debounceTime(600),
      distinctUntilChanged())
      .subscribe(value => {
        console.log(value);
      });
  }
}
