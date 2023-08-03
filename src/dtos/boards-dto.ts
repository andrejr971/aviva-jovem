export type ShepherdDTO = {
  id: number;
  name: string;
  office: string;
  profile: string;
};

export type LeaderDTO = {
  id: number;
  name: string;
  congregation: string;
};

export type MusicianDTO = {
  id: number;
  name: string;
};

export type VoluntaryDTO = {
  id: number;
  name: string;
  office: string;
};

export type ContributorDTO = {
  leaders: LeaderDTO[];
  musicians: MusicianDTO[];
  outhers: VoluntaryDTO[];
};
