import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchHistory: string[] = [];

  constructor(public CookiesService: CookieService) {}

  getSearchHistory() {
    let searchHistory = this.CookiesService.get('search-history');

    if (!searchHistory) return [];

    this.searchHistory = JSON.parse(searchHistory) || [];

    console.log('searchHistory:', searchHistory);
    return this.updateSearchHistory();
  }

  updateSearchHistory(value?: string) {
    // Temp solution to get search history

    if (!value) 
      return this.searchHistory;
    

    // store last 10 searches
    this.searchHistory.unshift(value);
    let uniqueHistory = [...new Set(this.searchHistory)];
    let trimmedHistory = uniqueHistory.slice(0, 10);
    trimmedHistory = trimmedHistory.map(cookie => cookie.replace(/,/g, ';'));
 
    this.CookiesService.set('search-history', trimmedHistory.join(','));

    return trimmedHistory;
  }
}

