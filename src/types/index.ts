export type Like = {
  id: string;
  createdAt: Date;
  parentId: string;
};

export type Location = {
  id: string;
  lat: number;
  lng: number;
  radius: number;
  needId: string;
};

export type Need = {
  id: string;
  category: string;
  email: string;
  likes: Like[];
  env: "DEV" | "PROD";
  location: Location;
};

export type LatLng = {
  lat: number;
  lng: number;
};

export type Radius = { radius: number };
