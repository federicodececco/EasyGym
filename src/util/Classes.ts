export class Exercise {
  name: string;
  repetitions: number;
  restPeriod: number;
  typeOfWeight?: string; /* kg / free body */
  weight?: number;

  constructor(
    name: string,
    repetition: number,
    restPeriod: number,
    typeOfWeight?: string,
    weight?: number
  ) {
    this.name = name;
    this.repetitions = repetition;
    this.restPeriod = restPeriod;
    this.typeOfWeight = typeOfWeight ? typeOfWeight : "";
    this.weight = weight ? weight : 0;
  }
}

export class WorkoutPlan {
  userName: string;
  userSurname: string;
  userEmail: string;
  startDate: string;
  expirationDate: string;
  exericesList: Exercise[];
  constructor(
    userName: string,
    userSurname: string,
    userEmail: string,
    startDate: string,
    expirationDate: string,
    exerciseList: Exercise[]
  ) {
    this.userName = userName;
    this.userSurname = userSurname;
    this.userEmail = userEmail;
    this.startDate = startDate;
    this.expirationDate = expirationDate;
    this.exericesList = exerciseList;
  }
}
