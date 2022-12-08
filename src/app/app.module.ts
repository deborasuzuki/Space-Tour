import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewPage } from './pages/crew/crew.page';
import { DestinationPage } from './pages/destination/destination.page';
import { HomePage } from './pages/home/home.page';
import { TechnologyPage } from './pages/technology/technology.page';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DestinationPictureComponent } from './pages/destination/destination-picture/destination-picture.component';
import { DestinationInfoComponent } from './pages/destination/destination-info/destination-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    DestinationPage,
    CrewPage,
    TechnologyPage,
    MenuComponent,
    DestinationPictureComponent,
    DestinationInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
