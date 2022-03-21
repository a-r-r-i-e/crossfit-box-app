export enum WorkoutSectionTypeEnum {
    WarmUp,
    StrengthAndTechnique,
    WorkoutOfTheDay,
    Stretching,
    OnRamp
}

export class WorkoutSectionType {
    constructor(code: number, text: string, description?: string) {
        this.Code = code;
        this.Text = text;
        this.Description = description;
    }

    Code: number;
    Text: string;
    Description?: string;
}

class WorkoutSectionTypeLookupQuery {
    WarmUp: WorkoutSectionType = new WorkoutSectionType(
        WorkoutSectionTypeEnum.WarmUp,
        "Warm-Up"
    );
    StrengthAndTechnique: WorkoutSectionType = new WorkoutSectionType(
        WorkoutSectionTypeEnum.StrengthAndTechnique,
        "Strength & Technique"
    );
    WorkoutOfTheDay: WorkoutSectionType = new WorkoutSectionType(
        WorkoutSectionTypeEnum.WorkoutOfTheDay,
        "Workout Of The Day"
    );
    Stretching: WorkoutSectionType = new WorkoutSectionType(
        WorkoutSectionTypeEnum.Stretching,
        "Stretching"
    );
    OnRamp: WorkoutSectionType = new WorkoutSectionType(
        WorkoutSectionTypeEnum.OnRamp,
        "On-Ramp"
    );
}

class LookupInfo {
    LookupQuery = new WorkoutSectionTypeLookupQuery();

    DefaultProgram(): WorkoutSectionType[] {
        let list = [];

        list.push(
            this.LookupQuery.WarmUp,
            this.LookupQuery.StrengthAndTechnique,
            this.LookupQuery.WorkoutOfTheDay);

        return list;
    } 

    All(): WorkoutSectionType[] {
        let list = [];

        list.push(
            this.LookupQuery.WarmUp,
            this.LookupQuery.StrengthAndTechnique,
            this.LookupQuery.WorkoutOfTheDay,
            this.LookupQuery.Stretching,
            this.LookupQuery.OnRamp);

        return list;
    }
}

export const WorkoutSectionTypeLookup = new LookupInfo();