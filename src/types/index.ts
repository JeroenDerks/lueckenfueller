export type Like = {
  id: string;
  createdAt: Date;
  parentId: string;
};

export type Location = {
  id: string;
  lat: number;
  long: number;
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
