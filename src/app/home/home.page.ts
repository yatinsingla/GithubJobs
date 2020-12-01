import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { promise } from 'protractor';
import { GithubService } from '../services/github.service';
import { ParamLocsService } from '../services/param-locs.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  jobs: any = [];
  dark = false;

  page_number = 1;
  page_limit = 8;
  searchText: string = '';
  searchLoc: string = '';
  fullTime: boolean = false;
  deviceType: any;

  constructor(
    private githubService: GithubService,
    private router: Router,
    private locsService: ParamLocsService,
    private utilityService: UtilityService
  ) {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.toggleTheme();

    prefersColor.addEventListener(
      'change',
      mediaQuery => {
        this.dark = mediaQuery.matches;
        this.toggleTheme();
      }
    );
  }

  ngOnInit() {
    this.deviceType = this.utilityService.deviceType();
    console.log("type: ", this.deviceType)
    this.getData(false, "");
  }

  async getData(isFirstLoad, event, searchText = '', searchLoc = '', fullTime = this.fullTime) {
    await this.utilityService.showloader();
    this.githubService.getjobs(this.page_number, searchText, searchLoc, fullTime).subscribe(
      async (res: any) => {
      console.log(res)
      this.jobs.push(...res);

      if(isFirstLoad) 
        event.target.complete();
      
      this.page_number++;
      await this.utilityService.dismissloader();
    })
  }

  toggleTheme() {
    document.body.classList.toggle('dark', this.dark);
  }

  doInfinite(event) {
    this.getData(true, event, this.searchText, this.searchLoc);
  }

  search(type) {
    // let searchText;
    // type == 'text' ? searchText = this.searchText.trim() : searchText = this.searchLoc.trim();

    // if(!searchText) {
    //   return;
    // }

    this.jobs = [];
    this.page_number = 1;
    this.getData(false, '', this.searchText, this.searchLoc)
  }

  searchFullTime() {
    this.jobs = [];
    this.page_number = 1;
    this.getData(false, '', this.searchText, this.searchLoc)
  }

  cardClicked(job) {
    console.log(job)
    this.locsService.loc = job;
    this.router.navigate([`/home/${job.id}`]);
  }
  

}
