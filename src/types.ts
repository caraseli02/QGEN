export interface IDogsList {
  url: string;
  width: string;
  height: string;
  id: string;
  breeds: {
    name: string;
    temperament: string;
    bred_for: string
    url?: string;
  }[]
}