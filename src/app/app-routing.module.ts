import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './app-components/bookings/bookings.component';
import { DashboardComponent } from './app-components/dashboard/dashboard.component';
import { UserProfileComponent } from './app-components/user-profile/user-profile.component';
import { WorkoutComponent } from './app-components/workout/workout.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'workout', component: WorkoutComponent },
  { path: 'userprofile', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
