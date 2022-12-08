import { SpaceDataService } from './../../services/space-data.service';
import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/interfaces/SpaceData';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {
  allDestinations: Destination[];
  image: string;
  title: string;
  description: string;
  distance: string;
  travel: string;

  constructor(private spaceData: SpaceDataService) {}

  async ngOnInit() {
    this.getAllDestinations();
  }

  getAllDestinations(): any {
    return this.spaceData.getDestination().subscribe(
      (data: Destination[]) => {
        this.allDestinations = data;
        console.log('Destinations', this.allDestinations);
        this.image = this.allDestinations[0].image;
        this.title = this.allDestinations[0].name;
        this.description = this.allDestinations[0].description;
        this.distance = this.allDestinations[0].distance;
        this.travel = this.allDestinations[0].travel;
      },
      (error: any) => {
        error;
      }
    );
  }
}
