import { SpaceDataService } from './../../services/space-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuIcon: string = '../../../assets/shared/icon-hamburger.svg';

  constructor(private spaceData: SpaceDataService, private router: Router) {}

  ngOnInit(): void {}

  public showMenu() {
    const showMenu = document
      .getElementById('mobile-menu')
      ?.classList.toggle('active');

    this.menuIcon == '../../../assets/shared/icon-close.svg'
      ? (this.menuIcon = '../../../assets/shared/icon-hamburger.svg')
      : (this.menuIcon = '../../../assets/shared/icon-close.svg');
  }
}
