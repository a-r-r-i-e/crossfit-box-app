import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/data/workout.model';
import { WorkoutInfo } from 'src/app/models/info/workout.info';
import { WorkoutService } from 'src/app/providers/workout-service.provider';

@Component({
  selector: 'workout',
  templateUrl: './workout.component.html'
})

export class WorkoutComponent implements OnInit {
  workout: Workout = new Workout();
  info: WorkoutInfo = new WorkoutInfo();
  workout_service: WorkoutService;

  constructor(private service: WorkoutService) {
    this.workout_service = service;
  }

  ngOnInit(): void {
    this.info = this.workout_service.get_workout_info();
    this.workout = this.workout_service.get_workout();
  }
}

interface IKeyValuePair {
  Key: number | any,
  Value: string | any
}

export class KeyValuePair {
  Key: number | any;
  Value: string | any;

  constructor(key: number | any, value: string | any) {
    this.Key = key;
    this.Value = value;
  }
}