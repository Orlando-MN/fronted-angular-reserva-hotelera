import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';

@Component({
  selector: 'app-home',
  imports: [
    DpDatePickerModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  datePickerConfig = {
    format: 'YYYY-MM-DD'
  }
}
