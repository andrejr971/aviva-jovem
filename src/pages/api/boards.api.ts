// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ContributorDTO, ShepherdDTO } from '@/dtos';
import type { NextApiRequest, NextApiResponse } from 'next';

type IData = {
  shepherds: ShepherdDTO[];
  contributors: ContributorDTO;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>,
) {
  if (req.method === 'GET') {
    const shepherds: ShepherdDTO[] = [
      {
        id: 1,
        name: 'Valdeonor Soares',
        office: 'Pastor Regional',
        profile: '/assets/images/boards/pr-valdeonor.jpg',
      },
      {
        id: 2,
        name: 'Josuel Cardoso',
        office: 'Pastor & Coordenador do Aviva',
        profile: '/assets/images/boards/pr-josuel.jpg',
      },
      {
        id: 3,
        name: 'Marcelo Costa',
        office: 'Pastor',
        profile: '/assets/images/boards/pr-marcelo.jpg',
      },
      {
        id: 4,
        name: 'Rafael Bertoldo',
        office: 'Pastor',
        profile: '/assets/images/boards/pr-rafael.jpg',
      },
    ];

    const contributors: ContributorDTO = {
      leaders: [
        {
          id: 1,
          name: 'Lucas Mathias',
          congregation: 'Jd. Vargem Grande',
        },
        {
          id: 2,
          name: 'Cp. Daniel Godoy',
          congregation: 'Jd. Vargem Grande',
        },
        {
          id: 3,
          name: 'Jaqueline Castro',
          congregation: 'Jd. Vargem Grande',
        },
        {
          id: 4,
          name: 'Gabriele Ferreira',
          congregation: 'Jd. Vargem Grande',
        },
        {
          id: 5,
          name: 'Co. Lucas Oliveira',
          congregation: 'Jd. Capela',
        },
        {
          id: 6,
          name: 'Co. Gidiel',
          congregation: 'Jd. Capela',
        },
        {
          id: 7,
          name: 'Pr. Deivide',
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
          name: 'Fábio',
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
          id: 6,
          name: 'Nathan Lopes',
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
