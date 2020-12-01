import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamLocsService } from '../services/param-locs.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.page.html',
  styleUrls: ['./desc.page.scss'],
})
export class DescPage implements OnInit {

  dark = false;
  jobDesc: any = new ParamLocsService();
  deviceType: string;

  constructor(private paramService: ParamLocsService, private utilityService: UtilityService) { 
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
    this.jobDesc = this.paramService.loc;
    console.log(this.jobDesc)

    this.deviceType = this.utilityService.deviceType();
  }

  toggleTheme() {
    document.body.classList.toggle('dark', this.dark);
  }

}
