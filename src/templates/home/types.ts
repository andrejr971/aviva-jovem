import {
  LeaderDTO,
  LecturerDTO,
  MusicianDTO,
  ShepherdDTO,
  VoluntaryDTO,
} from '@/dtos';

export type HomeProps = {
  leaders: LeaderDTO[];
  shepherds: ShepherdDTO[];
  volunteers: VoluntaryDTO[];
  musicians: MusicianDTO[];
  lecturers: LecturerDTO[];
};
