import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit, OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('%cHome Page Init', 'font-size: 22px');
  }

  ngAfterViewInit(): void {
    console.log('%cAfter Home Page Init', 'font-size: 22px');
  }

  ngOnDestroy(): void {
    console.log('%cHome Page Destroy', 'font-size: 22px');
  }
}
