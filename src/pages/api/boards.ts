// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type IShepherds = {
  id: number;
  name: string;
  office: string;
  profile: string;
};

type IContributors = {
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

type IData = {
  shepherds: IShepherds[];
  contributors: IContributors;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>,
) {
  if (req.method === 'GET') {
    const shepherds: IShepherds[] = [
      {
        id: 1,
        name: 'Pr. Valdeonor Soares',
        office: 'Pastor Regional',
        profile: '/assets/images/boards/image01.png',
      },
      {
        id: 2,
        name: 'Pr. Josuel Cardoso',
        office: 'Cordenador do Aviva',
        profile: '/assets/images/boards/image02.png',
      },
      {
        id: 3,
        name: 'Pr. Marcelo Costa',
        office: 'Pastor',
        profile: '/assets/images/boards/image03.png',
      },
    ];

    const contributors: IContributors = {
      leaders: [
        {
          id: 1,
          name: 'Camila Souza',
          congregation: 'Jd. Vargem Grande',
        },
        {
          id: 2,
          name: 'Dc. Daniel Godoy',
          congregation: 'Jd. Vargem Grande',
        },
        {
          id: 3,
          name: 'Jaqueline Castro',
          congregation: 'Jd. Vargem Grande',
        },
        {
          id: 4,
          name: 'Co. Gediel Levi',
          congregation: 'Jd. Capela',
        },
        {
          id: 5,
          name: 'sthefany Santana',
          congregation: 'Jd. Capela',
        },
        {
          id: 6,
          name: 'Pb. Roberto Batista',
          congregation: 'Jd. São Judas',
        },
        {
          id: 7,
          name: 'Gabriela Ferreira',
          congregation: 'Jd. São Judas',
        },
        {
          id: 8,
          name: 'Maria Vanessa',
          congregation: 'Jd. São Judas',
        },
      ],
      musicians: [
        {
          id: 1,
          name: 'Misael Yossef',
        },
        {
          id: 2,
          name: 'André Farias',
        },
        {
          id: 3,
          name: 'Lucas Henrique',
        },
        {
          id: 4,
          name: 'Oseas Santana',
        },
        {
          id: 5,
          name: 'Thiago Soares',
        },
        {
          id: 6,
          name: 'Aline Cordeiro',
        },
        {
          id: 7,
          name: 'Robert Xavier',
        },
        {
          id: 8,
          name: 'Vitor Marcondes',
        },
        {
          id: 9,
          name: 'Felipe Tomazolli',
        },
      ],
      outhers: [
        {
          id: 1,
          name: 'André Junior',
          office: 'Mídia',
        },
        {
          id: 2,
          name: 'Daniela Araújo',
          office: 'Mídia',
        },
        {
          id: 3,
          name: 'Nycolly Cristiny',
          office: 'Mídia',
        },
        {
          id: 4,
          name: 'Natã Oliveira',
          office: 'Mídia',
        },
        {
          id: 5,
          name: 'Letícia Batista',
          office: 'Tesoureira',
        },
      ],
    };

    const boards: IData = {
      shepherds,
      contributors,
    };

    res.status(200).json(boards);
  } else {
    res.status(404);
  }
}
