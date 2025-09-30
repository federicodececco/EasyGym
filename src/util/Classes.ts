export class User {
  id: string;
  name: string;
  surname: string;
  email: string;
  height: string;
  weigth: string;
  imageUrl: string;
  constructor(
    id: string,
    name: string,
    surname: string,
    email: string,
    height: string,
    weigth: string,
    imageUrl: string
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
    weight?: number
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
  userName: string;
  userSurname: string;
  userEmail: string;
  startDate: string;
  expirationDate: string;
  exericesList: Exercise[];
  constructor(
    userId: string,
    userName: string,
    userSurname: string,
    userEmail: string,
    startDate: string,
    expirationDate: string,
    exerciseList: Exercise[]
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userSurname = userSurname;
    this.userEmail = userEmail;
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
    weight: number
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
    weight: number
  ) {
    this.userId = userId;
    this.id = id;
    this.date = date;
    this.percent = percent;
    this.weight = weight;
  }
}
