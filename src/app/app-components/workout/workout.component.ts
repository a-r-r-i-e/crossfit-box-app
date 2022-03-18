import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
  constructor() { }

  warm_up_exercises: Exercise[] = [];
  strength_technique_exercises: Exercise[] = [];
  workout_of_the_day: Exercise[] = [];
  rounds: number = 0;

  ngOnInit(): void {
    this.getWarmUpExercises();
    this.getStrengthAndTechniqueExercises();
    this.getWorkoutOfTheDayExercises();
    this.rounds = 3;
  }

  getWarmUpExercises(): void {
    this.warm_up_exercises.push(
      { Name: "Push-Ups", Reps: 10, Equipment: { EquipmentEnum: EquipmentEnum.Bodyweight } }, 
      { Name: "Sit-Ups", Reps: 15, Equipment: { EquipmentEnum: EquipmentEnum.Bodyweight } }, 
      { Name: "Kettlebell Swings", Reps: 20, Equipment: { EquipmentEnum: EquipmentEnum.Kettlebell, Amount: 1, RxMen: "16", RxWomen: 10 } });
  }

  getStrengthAndTechniqueExercises(): void {
    this.strength_technique_exercises.push(
      { Name: "Push-Ups", Reps: 10, Equipment: { EquipmentEnum: EquipmentEnum.Bodyweight } }, 
      { Name: "Sit-Ups", Reps: 15, Equipment: { EquipmentEnum: EquipmentEnum.Bodyweight } }, 
      { Name: "Kettlebell Swings", Reps: 20, Equipment: { EquipmentEnum: EquipmentEnum.Kettlebell, Amount: 1, RxMen: "16", RxWomen: 10 } });
  }

  getWorkoutOfTheDayExercises(): void {
    this.workout_of_the_day.push(
      { Name: "Push-Ups", Reps: 10, Equipment: { EquipmentEnum: EquipmentEnum.Bodyweight } }, 
      { Name: "Sit-Ups", Reps: 15, Equipment: { EquipmentEnum: EquipmentEnum.Bodyweight } }, 
      { Name: "Kettlebell Swings", Reps: 20, Equipment: { EquipmentEnum: EquipmentEnum.Kettlebell, Amount: 1, RxMen: "16", RxWomen: 10 } });
  }
}

interface Workout {
  WorkoutType?: WorkoutTypeEnum,
  WarmUp?: Exercise[],
  StrengthAndTechnique?: Exercise[],
  WorkoutOfTheDay?: Exercise[]
}

interface Exercise {
  Name?: string,
  Reps?: number,
  Equipment?: Equipment
}

interface Equipment {
  EquipmentEnum?: EquipmentEnum,
  Amount?: number,
  RxMen?: number | string,
  RxWomen?: number | string
}

enum EquipmentEnum {
  Bodyweight = "Bodyweight",
  BumperPlate = "Bumper Plate",
  Kettlebell = "Kettlebell",
  Dumbbell = "Dumbbell",
  Barbell = "Barbell",
  JumpRope = "Jump rope"
}

enum WorkoutTypeEnum {
  AMRAP = "AMRAP (As Many Rounds As Possible)",
  EMOM = "Every Minute On the Minute",
  ForTime = "For Time",
  ForRounds = "For Rounds"
}