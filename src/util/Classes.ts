export class User {
  id: string;
  name: string;
  surname: string;
  email: string;
  height: number;
  weigth: number;
  imageUrl: string;
  constructor(
    id: string,
    name: string,
    surname: string,
    email: string,
    height: number,
    weigth: number,
    imageUrl: string,
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.height = height;
    this.weigth = weigth;
    this.imageUrl = imageUrl;
  }
}

export class Trainer {
  id: string;
  userId: string;
  role: string;
  constructor(user: User, id: string, role: string) {
    this.id = id;
    this.userId = user.id;
    this.role = role;
  }
}

export class Exercise {
  name: string;
  series: number;
  repetitions: number;
  restPeriod: number;
  typeOfWeight: string; /* kg / free body */
  weight: number;

  constructor(
    name: string,
    series: number,
    repetition: number,
    restPeriod: number,
    typeOfWeight?: string,
    weight?: number,
  ) {
    this.name = name;
    this.series = series;
    this.repetitions = repetition;
    this.restPeriod = restPeriod;
    this.typeOfWeight = typeOfWeight ? typeOfWeight : "";
    this.weight = weight ? weight : 0;
  }
}

export class WorkoutPlan {
  userId: string;
  name: string;
  startDate: string;
  expirationDate: string;
  exericesList: Exercise[];
  constructor(
    userId: string,
    name: string,
    startDate: string,
    expirationDate: string,
    exerciseList: Exercise[],
  ) {
    this.userId = userId;
    this.name = name;
    this.startDate = startDate;
    this.expirationDate = expirationDate;
    this.exericesList = exerciseList;
  }
}

export class LeanMass {
  userId: string;
  id: string;
  date: string;
  percent: number;
  weight: number;
  constructor(
    userId: string,
    id: string,
    date: string,
    percent: number,
    weight: number,
  ) {
    this.userId = userId;
    this.id = id;
    this.date = date;
    this.percent = percent;
    this.weight = weight;
  }
}
export class FatMass {
  userId: string;
  id: string;
  date: string;
  percent: number;
  weight: number;
  constructor(
    userId: string,
    id: string,
    date: string,
    percent: number,
    weight: number,
  ) {
    this.userId = userId;
    this.id = id;
    this.date = date;
    this.percent = percent;
    this.weight = weight;
  }
}
