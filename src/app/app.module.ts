import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutComponent } from './app-components/workout/workout.component';
import { NavBarComponent } from './app-components/nav-bar/nav-bar.component';
import { DashboardComponent } from './app-components/dashboard/dashboard.component';
import { BookingsComponent } from './app-components/bookings/bookings.component';
import { UserProfileComponent } from './app-components/user-profile/user-profile.component';
import { WorkoutService } from './providers/workout-service.provider';
import { RoundForRoundRestComponent } from './app-components/workout/workout-layouts/round-for-round-rest/round-for-round-rest.component';
import { RoundForRoundComponent } from './app-components/workout/workout-layouts/round-for-round/round-for-round.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    NavBarComponent,
    DashboardComponent,
    BookingsComponent,
    UserProfileComponent,
    RoundForRoundRestComponent,
    RoundForRoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
