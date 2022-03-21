import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'round-for-round-rest',
  templateUrl: './round-for-round-rest.component.html'
})
export class RoundForRoundRestComponent implements OnInit {
  roundForRoundRestModel: RoundForRoundRestModel = new RoundForRoundRestModel(
    "Round for Round",
    [{
      Name: "Pull-ups",
      Reps: 20,
      RxMen: 50,
      RxWomen: 40,
      Equipment: "Bodyweight"
    },
    {
      Name: "Push-ups",
      Reps: 30
    },
    {
      Name: "Sit-ups",
      Reps: 40
    },
    {
      Name: "Air Squats",
      Reps: 50
    }],
    5,
    3
  )
  constructor() { }

  ngOnInit(): void {
  }

}

export class RoundForRoundRestModel {
  Title?: string;
  Movements?: RoundForRoundRestMovementModel[];
  Rounds?: number;
  Rest?: number;

  constructor(title?: string, movements?: RoundForRoundRestMovementModel[], rounds?: number, rest?: number) {
    this.Title = title;
    this.Movements = movements;
    this.Rounds = rounds;
    this.Rest = rest;
  }
}

export class RoundForRoundRestMovementModel {
  Name: string;
  Reps: number;
  RxMen?: number;
  RxWomen?: number;
  Equipment?: string;

  constructor(name: string, reps: number, rxMen?: number, rxWomen?: number, equipment?: string) {
    this.Name = name;
    this.Reps = reps;
    this.RxMen = rxMen;
    this.RxWomen = rxWomen;
    this.Equipment = equipment;
  }
}