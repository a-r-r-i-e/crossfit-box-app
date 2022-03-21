import { Injectable } from '@angular/core';
import { KeyValuePair } from '../app-components/workout/workout.component';
import { StrengthAndTechnique, WarmUp, Workout, WorkoutExercise, WorkoutOfTheDay } from '../models/data/workout.model';
import { ExerciseTypeLookup } from '../models/enums/exercise-type.enum';
import { WorkoutSectionType, WorkoutSectionTypeLookup } from '../models/enums/workout-section.enum';
import { WorkoutType, WorkoutTypeLookup } from '../models/enums/workout-type.enum';
import { WorkoutInfo } from '../models/info/workout.info';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
    get_workout(): Workout {
        var workout_exercises = [];
        workout_exercises.push(new WorkoutExercise("Push-ups", 10, 10, 10));
        workout_exercises.push(new WorkoutExercise("Sit-ups", 5, 10, 10));
        workout_exercises.push(new WorkoutExercise("Air Squats", 15, 10, 10));
    
        var warm_up = new WarmUp(5, workout_exercises);
        var strength_and_technique = new StrengthAndTechnique(10, workout_exercises);
        var workout_of_the_day = new WorkoutOfTheDay(25, workout_exercises);

        return new Workout(warm_up, strength_and_technique, workout_of_the_day);
    }

    get_workout_info(): WorkoutInfo {
      var workout_info_result = new WorkoutInfo();

      workout_info_result.AvailableWorkoutPlans = [];
      var workout_type_lookup = WorkoutTypeLookup.All();
      
      for (var index = 0; index < workout_type_lookup.length; index++) {
        var workout_type = workout_type_lookup[index];

        workout_info_result.AvailableWorkoutPlans?.push(new KeyValuePair(workout_type.Code, workout_type.Text));
      }

      workout_info_result.AvailableExercises = [];
      var exercise_type_lookup = ExerciseTypeLookup.All();

      for (var index = 0; index < exercise_type_lookup.length; index++) {
        var exercise_type = exercise_type_lookup[index];

        workout_info_result.AvailableExercises?.push(new KeyValuePair(exercise_type.Code, exercise_type.Text));
      }

      workout_info_result.AvailableWorkoutSections = [];
      var workout_section__type_lookup = WorkoutSectionTypeLookup.DefaultProgram();

      for (var index = 0; index < workout_section__type_lookup.length; index++) {
        var workout_section__type = workout_section__type_lookup[index];

        workout_info_result.AvailableWorkoutSections?.push(new KeyValuePair(workout_section__type.Code, workout_section__type.Text));
      }
      
      return workout_info_result;
    }
}