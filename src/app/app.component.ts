import {Component, OnInit, VERSION} from '@angular/core';
import {interval, map, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-webapp-test';
  version = VERSION.full;
  currentDate!: Observable<Date>;

  ngOnInit(): void {
    this.currentDate = interval(1000).pipe(
      map((i: number) => new Date())
    );
  }
}
