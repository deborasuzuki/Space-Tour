export interface SpaceData {
  destination: Destination;
  crew: Crew;
  technology: Technology;
}

export interface Destination {
  id: number;
  name: string;
  description: string;
  distance: string;
  travel: string;
  image: string;
}

export interface Crew {
  id: number;
  job: string;
  name: string;
  description: string;
  image: string;
}

export interface Technology {
  id: number;
  job: string;
  name: string;
  description: string;
  imageDesktop: string;
  imageMobile: string;
}
