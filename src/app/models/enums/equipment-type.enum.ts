export enum EquipmentTypeEnum {
    Bodyweight,
    BumperPlate,
    SingleKettlebell,
    SingleDumbbell,
    DoubleKettlebells,
    DoubleDumbbells,
    Barbell,
    JumpRope,
    Box,
    Rower,
    AirBike,
    ErgRower,
    Custom
  }

  export class EquipmentType {
    constructor(code: number, text: string, description?: string) {
        this.Code = code;
        this.Text = text;
        this.Description = description;
    }

    Code: number;
    Text: string;
    Description?: string;
}

class EquipmentTypeLookupQuery {
  Bodyweight: EquipmentType = new EquipmentType(
    EquipmentTypeEnum.Bodyweight,
        "Bodyweight"
    );
    BumperPlate: EquipmentType = new EquipmentType(
      EquipmentTypeEnum.BumperPlate,
        "Bumper Plate"
    );
    SingleKettlebell: EquipmentType = new EquipmentType(
      EquipmentTypeEnum.SingleKettlebell,
        "Single Kettlebell"
    );
    SingleDumbbell: EquipmentType = new EquipmentType(
      EquipmentTypeEnum.SingleDumbbell,
        "Single Dumbbell"
    );
    DoubleKettlebells: EquipmentType = new EquipmentType(
      EquipmentTypeEnum.DoubleKettlebells,
        "Double Kettlebells"
    );
    DoubleDumbbells: EquipmentType = new EquipmentType(
      EquipmentTypeEnum.DoubleDumbbells,
        "Double Dumbbells"
    );
}

class LookupInfo {
    LookupQuery = new EquipmentTypeLookupQuery();

    All(): EquipmentType[] {
        let list = [];

        list.push(
            this.LookupQuery.Bodyweight,
            this.LookupQuery.SingleDumbbell,
            this.LookupQuery.DoubleDumbbells,
            this.LookupQuery.SingleKettlebell,
            this.LookupQuery.DoubleKettlebells,
            this.LookupQuery.BumperPlate);

        return list;
    }
}

export const EquipmentTypeLookup = new LookupInfo();