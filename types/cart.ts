export interface Cart {
  id: number;
  price: number;
  image: string;
  title: string;
  body: string;
  time: string;
  popular: boolean;
  courseList : List[]
}

export interface List {
  id: number;
  number: number;
  title: string;
  isLock: boolean;
  time: string;
}
