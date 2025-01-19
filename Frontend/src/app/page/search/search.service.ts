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

    searchHistory = '["' + searchHistory.replace(", ", '", "') + '"]'; 

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
    const uniqueHistory = [...new Set(this.searchHistory)];
    const trimmedHistory = uniqueHistory.slice(0, 10);

    this.CookiesService.set('search-history', trimmedHistory.join(','));

    return trimmedHistory;
  }
}

