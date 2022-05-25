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

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    DestinationPage,
    CrewPage,
    TechnologyPage,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
