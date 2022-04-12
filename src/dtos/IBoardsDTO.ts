export type IBoardsDTO = {
  shepherds: IShepherdsDTO[];
  contributors: IContributorsDTO;
};

export type IShepherdsDTO = {
  id: number;
  name: string;
  office: string;
  profile: string;
};

export type IContributorsDTO = {
  leaders: {
    id: number;
    name: string;
    congregation: string;
  }[];
  musicians: {
    id: number;
    name: string;
  }[];
  outhers: {
    id: number;
    name: string;
    office: string;
  }[];
};

export type ILeadersDTO = {
  id: number;
  name: string;
  congregation: string;
};

export type IMusiciansDTO = {
  id: number;
  name: string;
};

export type IOuthersDTO = {
  id: number;
  name: string;
  office: string;
};
