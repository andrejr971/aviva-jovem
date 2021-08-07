export type IOuthers = {
  id: number;
  name: string;
  info: string;
};

export type IMusicians = {
  id: number;
  name: string;
};

export type ILeaders = {
  id: number;
  name: string;
  congregation: string;
};

export type IPrincipal = {
  id: number;
  name: string;
  office: string;
  perfil: string;
};

export type IBoard = {
  principal: IPrincipal[];
  outhers: {
    leaders: ILeaders[];
    musicians: IMusicians[];
    outhers: IOuthers[];
  };
};

export interface IndexProps {
  boards: IBoard;
}
