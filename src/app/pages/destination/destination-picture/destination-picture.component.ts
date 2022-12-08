import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'destination-picture',
  templateUrl: './destination-picture.component.html',
  styleUrls: ['./destination-picture.component.scss'],
})
export class DestinationPictureComponent implements OnInit {
  @Input() destinationImage: string;

  constructor() {}

  ngOnInit(): void {}
}
