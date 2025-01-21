import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { SearchService } from './search.service';

@Component({
  selector: 'nav-search',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchControl = new FormControl('');
  suggestions: string[] = [];
  filteredSuggestions!: Observable<string[]>;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.suggestions = this.searchService.getSearchHistory();

    this.filteredSuggestions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(filterValue)
    );
  }

  clearSearch() {
    this.searchControl.setValue('');
  }

  search() {
    if (!this.searchControl.value) return;

    console.log('searching for:', this.searchControl.value);

    this.searchService.updateSearchHistory(this.searchControl.value);

    // TODO: navigate to search results

  }
}
