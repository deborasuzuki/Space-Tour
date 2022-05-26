import { TechnologyPage } from './pages/technology/technology.page';
import { CrewPage } from './pages/crew/crew.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationPage } from './pages/destination/destination.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'destination', component: DestinationPage },
  { path: 'crew', component: CrewPage },
  { path: 'technology', component: TechnologyPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
