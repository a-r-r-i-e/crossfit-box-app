export enum ExerciseTypeEnum {
    BackSquats,
    FrontSquat,
    StrictPress,
    PushPress,
    Clean,
    PowerClean,
    SquatClean,
    CleanAndSquat,
    CleanAndJerk,
    Jerk,
    SplitJerk,
    Squat,
    HandStandPushUp,
    HandStandWalk,
    HandstandHold,
    BearComplex,
    Complex,
    Burpee,
    PushUp,
    SitUp,
    PullUp,
    ChinUp,
    BearCrawl,
    Lunge,
    BoxJump,
    SingleUnderJumpRopeSkip,
    DoubleUnderJumpRopeSkip,
    ShoulderToOverhead,
    GroundToOverhead,
    BoxStepUp,
    BoxStepOver,
    BoxJumpOver,
    BurpeeOver,
    MuscleUp,
    BenchPress,
    Dip,
    ChestToBar,
    LegUpLegRaise,
    PistolSquat,
    TurkishGetUp,
    SledPush,
    RopeClimb,
    Custom
}

export class ExerciseType {
    constructor(code: number, text: string, description?: string) {
        this.Code = code;
        this.Text = text;
        this.Description = description;
    }

    Code: number;
    Text: string;
    Description?: string;
}

class ExerciseTypeLookupQuery {
    BackSquats: ExerciseType = new ExerciseType(
        ExerciseTypeEnum.BackSquats,
        "Back Squat"
    );
    FrontSquats: ExerciseType = new ExerciseType(
        ExerciseTypeEnum.FrontSquat,
        "Front Squat"
    );
    AirSquats: ExerciseType = new ExerciseType(
        ExerciseTypeEnum.Squat,
        "Air Squat"
    );
    PistolSquats: ExerciseType = new ExerciseType(
        ExerciseTypeEnum.PistolSquat,
        "Pistol Squat"
    );
}

class LookupInfo {
    LookupQuery = new ExerciseTypeLookupQuery();

    All(): ExerciseType[] {
        let list = [];

        list.push(
            this.LookupQuery.BackSquats,
            this.LookupQuery.FrontSquats,
            this.LookupQuery.AirSquats);

        return list;
    }
}

export const ExerciseTypeLookup = new LookupInfo();