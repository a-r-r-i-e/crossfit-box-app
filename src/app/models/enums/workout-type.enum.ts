export enum WorkoutTypeEnum {
  Custom = 0,
  AMRAP = 1,
  EMOM = 2,
  ForTime = 3,
  ForRounds = 4,
  ForReps = 5,
  ForWeight = 6,
  ForDistance = 7,
  TillFailure = 8,
  RoundForRound = 9,
  RoundForRoundRest = 10,
  DescendingLadder = 11,
  AscendingLadder = 12,
  TwentyOneFifteenNine = 13
}

export class WorkoutType {
  constructor(code: number, text: string, acronym?: string, description?: string) {
    this.Code = code;
    this.Text = text;
    this.Acronym = acronym;
    this.Description = description;
  }

  Code: number;
  Text: string;
  Acronym?: string;
  Description?: string;
}

class WorkoutTypeLookupQuery {
  Custom: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.Custom,
    "Custom",
  );
  AMRAP: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.AMRAP,
    "As Many Rounds As Possible (AMRAP)",
    "AMRAP"
  );
  EMOM: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.EMOM,
    "Every Minute On the Minute (EMOM)",
    "EMOM"
  );
  ForTime: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.ForTime,
    "Complete For Time"
  );
  ForRounds: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.ForRounds,
    "Complete For Rounds"
  );
  ForReps: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.ForReps,
    "Complete For Reps"
  );
  ForWeight: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.ForWeight,
    "Complete For Max Weight"
  );
  ForDistance: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.ForDistance,
    "Complete For Distance",
  );
  TillFailure: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.TillFailure,
    "Do Till Failure"
  );
  RoundForRound: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.RoundForRound,
    "Round For Round"
  );
  RoundForRoundRest: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.RoundForRoundRest,
    "Round For Round Rest",
  );
  DescendingLadder: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.DescendingLadder,
    "Descending Ladder"
  );
  AscendingLadder: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.AscendingLadder,
    "Ascending Ladder"
  );
  TwentyOneFifteenNine: WorkoutType = new WorkoutType(
    WorkoutTypeEnum.TwentyOneFifteenNine,
    "21-15-9"
  );
}

class LookupInfo {
  LookupQuery = new WorkoutTypeLookupQuery();

  All(): WorkoutType[] {
    let list = [];

    list.push(
      this.LookupQuery.Custom,
      this.LookupQuery.AMRAP,
      this.LookupQuery.EMOM,
      this.LookupQuery.ForTime,
      this.LookupQuery.ForRounds,
      this.LookupQuery.ForReps,
      this.LookupQuery.ForWeight,
      this.LookupQuery.ForDistance,
      this.LookupQuery.TillFailure,
      this.LookupQuery.RoundForRound,
      this.LookupQuery.RoundForRoundRest,
      this.LookupQuery.DescendingLadder,
      this.LookupQuery.AscendingLadder,
      this.LookupQuery.TwentyOneFifteenNine);
    
    return list;
  }
}

export const WorkoutTypeLookup = new LookupInfo();