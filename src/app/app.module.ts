import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrewPage } from './pages/crew/crew.page';
import { DestinationPage } from './pages/destination/destination.page';
import { HomePage } from './pages/home/home.page';
import { TechnologyPage } from './pages/technology/technology.page';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    DestinationPage,
    CrewPage,
    TechnologyPage,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
