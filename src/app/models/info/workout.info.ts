import { KeyValuePair } from "src/app/app-components/workout/workout.component";

interface IWorkoutInfo {
    WarmUp?: WarmUpInfo,
    StrengthAndTechnique?: StrengthAndTechniqueInfo,
    WorkoutOfTheDay?: WorkoutOfTheDayInfo
}

export class WorkoutInfo implements IWorkoutInfo {
    AvailableWorkoutPlans?: KeyValuePair[];
    AvailableExercises?: KeyValuePair[];
    AvailableWorkoutSections?: KeyValuePair[];
    
    WarmUp?: WarmUpInfo;
    StrengthAndTechnique?: StrengthAndTechniqueInfo;
    WorkoutOfTheDay?: WorkoutOfTheDayInfo;

    constructor(warmUp?: WarmUpInfo, strengthAndTechnique?: StrengthAndTechniqueInfo, workoutOfTheDay?: WorkoutOfTheDayInfo) {
        this.WarmUp = warmUp;
        this.StrengthAndTechnique = strengthAndTechnique;
        this.WorkoutOfTheDay = workoutOfTheDay;
    }
}

export class WarmUpInfo {
    Rounds: number;
    Exercises: WorkoutExerciseInfo[];

    constructor(rounds: number, exercises: WorkoutExerciseInfo[]) {
        this.Rounds = rounds;
        this.Exercises = exercises;
    }
}

export class StrengthAndTechniqueInfo {
    Rounds: number;
    Exercises: WorkoutExerciseInfo[];

    constructor(rounds: number, exercises: WorkoutExerciseInfo[]) {
        this.Rounds = rounds;
        this.Exercises = exercises;
    }
}

export class WorkoutOfTheDayInfo {
    Rounds: number;
    Exercises: WorkoutExerciseInfo[];

    constructor(rounds: number, exercises: WorkoutExerciseInfo[]) {
        this.Rounds = rounds;
        this.Exercises = exercises;
    }
}

export class WorkoutExerciseInfo {
    Name: string;
    Reps: number;
    RxMen: number;
    RxWomen: number;

    constructor(name: string, reps: number, rxMen: number, rxWomen: number) {
        this.Name = name;
        this.Reps = reps;
        this.RxMen = rxMen;
        this.RxWomen = rxWomen;
    }
}