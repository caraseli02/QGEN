export interface IDog {
  url: string;
  width: string;
  height: string;
  id: string;
  breeds: {
    name: string;
    temperament: string;
    bred_for: string
  }[]
}

export interface IValues { username: string, password: string }
