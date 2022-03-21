interface IWorkout {
    WarmUp?: WarmUp,
    StrengthAndTechnique?: StrengthAndTechnique,
    WorkoutOfTheDay?: WorkoutOfTheDay
}

export class Workout implements IWorkout {
    WarmUp?: WarmUp;
    StrengthAndTechnique?: StrengthAndTechnique;
    WorkoutOfTheDay?: WorkoutOfTheDay;

    constructor(warmUp?: WarmUp, strengthAndTechnique?: StrengthAndTechnique, workoutOfTheDay?: WorkoutOfTheDay) {
        this.WarmUp = warmUp;
        this.StrengthAndTechnique = strengthAndTechnique;
        this.WorkoutOfTheDay = workoutOfTheDay;
    }
}

export class WarmUp {
    Rounds: number;
    Exercises: WorkoutExercise[];

    constructor(rounds: number, exercises: WorkoutExercise[]) {
        this.Rounds = rounds;
        this.Exercises = exercises;
    }
}

export class StrengthAndTechnique {
    Rounds: number;
    Exercises: WorkoutExercise[];

    constructor(rounds: number, exercises: WorkoutExercise[]) {
        this.Rounds = rounds;
        this.Exercises = exercises;
    }
}

export class WorkoutOfTheDay {
    Rounds: number;
    Exercises: WorkoutExercise[];

    constructor(rounds: number, exercises: WorkoutExercise[]) {
        this.Rounds = rounds;
        this.Exercises = exercises;
    }
}

export class WorkoutExercise {
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