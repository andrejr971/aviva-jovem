import { LeaderDTO, MusicianDTO, ShepherdDTO, VoluntaryDTO } from '@/dtos';

export type BoardsProps = {
  leaders: LeaderDTO[];
  shepherds: ShepherdDTO[];
  volunteers: VoluntaryDTO[];
  musicians: MusicianDTO[];
};
