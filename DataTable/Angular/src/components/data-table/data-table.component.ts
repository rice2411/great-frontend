import { Component, OnInit } from '@angular/core';
import users from './users.json';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest } from 'rxjs';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  options = [5, 10, 20];
  columns = [
    { label: 'ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Occupation', key: 'occupation' },
  ];

  _pageSubject = new BehaviorSubject<number>(1);
  _pageSizeSubject = new BehaviorSubject<number>(5);
  data: any[] = [];
  text = '';
  _totalPages = 0;

  ngOnInit() {
    combineLatest([this._pageSubject, this._pageSizeSubject]).subscribe(
      ([page, pageSize]) => {
        this.draw(page, pageSize);
      }
    );
  }

  draw(page: number, pageSize: number) {
    const { pageUsers, totalPages } = this.paginateUsers(users, page, pageSize);
    this.data = pageUsers;
    this._totalPages = totalPages;
    this.text = `Page ${page} of ${this._totalPages}`;
  }

  paginateUsers(usersList: any[], page: number, pageSize: number) {
    const start = (page - 1) * pageSize;
    const pageUsers = usersList.slice(start, start + pageSize);
    const totalPages = Math.ceil(usersList.length / pageSize);
    return { pageUsers, totalPages };
  }

  handleChange(e: Event) {
    const newPageSize = parseInt((e.target as HTMLSelectElement).value, 10);
    this._pageSubject.next(1); // Reset to first page on page size change
    this._pageSizeSubject.next(newPageSize);
  }

  clickNext() {
    if (this._pageSubject.value < this._totalPages) {
      this._pageSubject.next(this._pageSubject.value + 1);
    }
  }

  clickPrev() {
    if (this._pageSubject.value > 1) {
      this._pageSubject.next(this._pageSubject.value - 1);
    }
  }
}
