export type ShepherdDTO = {
  id: string;
  name: string;
  office: string;
  profile: string;
};

export type LeaderDTO = {
  id: string;
  name: string;
  congregation: string;
};

export type MusicianDTO = {
  id: string;
  name: string;
};

export type VoluntaryDTO = {
  id: string;
  name: string;
  office: string;
};

export type ContributorDTO = {
  leaders: LeaderDTO[];
  musicians: MusicianDTO[];
  outhers: VoluntaryDTO[];
};

export type LecturerDTO = {
  id: string;
  name: string;
  office: string;
  profile: string;
};
