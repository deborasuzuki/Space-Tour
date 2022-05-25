import { SpaceDataService } from './../../services/space-data.service';
import { Component, OnInit } from '@angular/core';
import { Crew, Destination } from 'src/app/interfaces/SpaceData';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {
  allDestinations: Destination[];
  allCrew: Crew[];

  constructor(private spaceData: SpaceDataService) {}

  async ngOnInit() {
    this.getAllDestinations();
    this.getAllCrew();
  }

  getAllDestinations(): any {
    return this.spaceData.getDestination().subscribe(
      (data: Destination[]) => {
        this.allDestinations = data;
        console.log('Destinations', this.allDestinations);
      },
      (error: any) => {
        error;
      }
    );
  }

  getAllCrew(): any {
    return this.spaceData.getCrew().subscribe(
      (data: Crew[]) => {
        this.allCrew = data;
        console.log('Crew', this.allCrew);
      },
      (error: any) => {
        error;
      }
    );
  }
}
