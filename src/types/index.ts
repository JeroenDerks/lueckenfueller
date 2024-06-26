export type Env = "DEV" | "PROD";

export type LatLng = {
  lat: number;
  lng: number;
};

export type Like = {
  createdAt: Date;
  env: Env;
  id: string;
  needLikeId: string;
};

export type Location = {
  env: Env;
  id: string;
  lat: number;
  lng: number;
  needLocationId: string;
  radius: number;
};

export type Need = {
  category: string;
  createdAt: Date;
  user?: User;
  env: Env;
  id: string;
  likes?: Like[] | null;
  location?: Location | null;
  title: string;
  updatedAt: Date;
};

export type Radius = { radius: number };
export type Zoom = { zoom: number };
export type NeedCoordinates = LatLng & Zoom & Radius;

export type User = {
  id: string;
  email: string;
  emailConfirmed: boolean;
  env: Env;
  needUserId: string;
};
