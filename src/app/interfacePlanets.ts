// NIE UŻYWANY!!!

export interface IntPlanets {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
  }
}

