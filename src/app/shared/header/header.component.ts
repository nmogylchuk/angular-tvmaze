import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShowService } from './../../core/service/show.service';
import { IShow } from './../../core/interfaces/show';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
//   public searchResult: IShow[];
//   public showSearchResults: boolean;
//   public searchShowForm: FormGroup;

//   constructor(
//     private searchFormBuilder: FormBuilder,
//     private showService: ShowService
//   ) {
//     this.searchResult = [];
//     this.showSearchResults = false;
//   }

//   ngOnInit(): void {
//     this.searchShowForm = this.searchFormBuilder.group({
//       search: ['', [Validators.required]]
//     });
//   }

//   onSearchShow(): void {
//     this.showService.fetchSearchShow(this.searchShowForm.controls.search.value).subscribe(shows => {
//       this.searchResult = shows;
//       this.showSearchResults = true;
//     });
//   }
}
