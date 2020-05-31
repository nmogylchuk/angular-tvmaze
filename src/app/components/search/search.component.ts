import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  public searchShowForm: FormGroup;

  constructor(private searchFormBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchShowForm = this.searchFormBuilder.group({
      search: ['', [Validators.required]]
    });
  }

  onSearch() {
    this.searchEvent.emit(this.searchShowForm.controls.search.value);
  }
}
