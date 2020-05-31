import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowService } from './../../core/service/show.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchStart = new EventEmitter();
  @Output() searchEmpty = new EventEmitter();
  @Output() searchResult = new EventEmitter();
  public searchShowForm: FormGroup;

  constructor(
    private searchFormBuilder: FormBuilder,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    this.searchShowForm = this.searchFormBuilder.group({
      search: ['', [Validators.required]]
    });
  }

  onSearchShow(): void {
    const query = this.searchShowForm.controls.search.value;
    if (query === '') {
      this.onSearchEmptyQuery();
      return;
    }
    this.onSearchStart();

    this.showService
      .fetchSearchShow(query)
      .pipe(delay(10))
      .subscribe(() => {
        this.onSearchResult();
      });
  }

  onSearchEmptyQuery() {
    this.searchEmpty.emit();
  }

  onSearchStart() {
    this.searchStart.emit();
  }

  onSearchResult() {
    this.searchResult.emit();
  }
}
