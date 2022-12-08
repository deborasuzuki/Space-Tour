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

  selectedDestination: string;

  constructor(private spaceData: SpaceDataService) {}

  async ngOnInit() {
    this.getAllDestinations(0);
  }

  getAllDestinations(destination: number) {
    return this.spaceData.getDestination().subscribe(
      (data: Destination[]) => {
        this.allDestinations = data;
        console.log('Destinations', this.allDestinations);
        this.image = this.allDestinations[destination].image;
        this.title = this.allDestinations[destination].name;
        this.description = this.allDestinations[destination].description;
        this.distance = this.allDestinations[destination].distance;
        this.travel = this.allDestinations[destination].travel;
        this.selectedDestination = this.allDestinations[destination].name;
      },
      (error: any) => {
        error;
      }
    );
  }
}
