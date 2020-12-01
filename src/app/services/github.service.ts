import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  getjobs(pageNum, searchText, searchLoc, fulltime) {
    let url = `https://jobs.github.com/positions.json?page=${pageNum}`;
    if(searchText) {
      url = url.concat(`&search=${searchText}`)
    } if(searchLoc) {
      url = url.concat(`&location=${searchLoc}`)
    } if(fulltime) {
      url = url.concat(`&full_time=${fulltime}`)
    }
    return this.httpClient.get(url);
  }
}
