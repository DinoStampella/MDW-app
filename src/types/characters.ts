interface Location {
    name: string;
}
  
export interface Character {
    id: number;
    name: string;
    status: string;
    image: string;
    gender: string;
    species: string;
    location: Location;
    url: string;
}
  