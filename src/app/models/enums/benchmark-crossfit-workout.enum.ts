export enum BenchmarkCrossfitWorkoutTypeEnum {
    Barbara,
    Chelsea,
    Mary,
    Cindy,
    Annie,
    Nicole,
    Angie,
    Eva,
    Helen,
    Kelly,
    Karen,
    Amanda,
    Jackie,
    Diane,
    Fran,
    Elizabeth,
    Nancy,
    Lynne,
    Isabel,
    Linda,
    Grace
}

export class BenchmarkCrossfitWorkoutType {
    constructor(code: number, text: string, description?: string) {
        this.Code = code;
        this.Text = text;
        this.Description = description;
    }

    Code: number;
    Text: string;
    Description?: string;
}

class BenchmarkCrossfitWorkoutTypeLookupQuery {
    Barbara: BenchmarkCrossfitWorkoutType = new BenchmarkCrossfitWorkoutType(
        BenchmarkCrossfitWorkoutTypeEnum.Barbara,
        "Barbara"
    );
    Chelsea: BenchmarkCrossfitWorkoutType = new BenchmarkCrossfitWorkoutType(
        BenchmarkCrossfitWorkoutTypeEnum.Chelsea,
        "Chelsea"
    );
}

class LookupInfo {
    LookupQuery = new BenchmarkCrossfitWorkoutTypeLookupQuery();

    All(): BenchmarkCrossfitWorkoutType[] {
        let list = [];

        list.push(
            this.LookupQuery.Barbara,
            this.LookupQuery.Chelsea);

        return list;
    }
}

export const BenchmarkCrossfitWorkoutTypeLookup = new LookupInfo();