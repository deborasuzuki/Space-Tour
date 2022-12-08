import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.scss'],
})
export class DestinationInfoComponent implements OnInit {
  @Input() destinationTitle: string;
  @Input() destinationDescription: string;
  @Input() destinationDistance: string;
  @Input() destinationTravel: string;

  constructor() {}

  ngOnInit(): void {}
}
