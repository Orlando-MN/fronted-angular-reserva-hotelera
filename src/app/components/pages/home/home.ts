import { Component } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';
import { HotelListing } from '../hotel-listing/hotel-listing';

@Component({
  selector: 'app-home',
  imports: [
    DpDatePickerModule,
    HotelListing
    ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  datePickerConfig = {
    format: 'YYYY-MM-DD',
  };
}
