import { Component, OnInit, OnChanges } from '@angular/core';
import { UsersService } from './users.service';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  count;

  constructor(private countService: CountService) {
    this.count = this.countService.count;
  }

  ngOnChanges() {

  }


}
