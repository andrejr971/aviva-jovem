import { NextApiRequest, NextApiResponse } from 'next';

const data = {
  principal: [
    {
      id: 1,
      name: 'Pr. Valdeonor Soares',
      office: 'Pastor Regional',
      perfil: 'assets/images/photos/board/valdeonor.jpg',
    },
    {
      id: 2,
      name: 'Pr. Josuel Cardoso',
      office: 'Coordenador',
      perfil: 'assets/images/photos/board/josuel.jpeg',
    },
    {
      id: 3,
      name: 'Pr. Roberto Batista',
      office: 'Pastor',
      perfil: 'assets/images/photos/board/roberto.png',
    },
  ],
  outhers: {
    leaders: [
      {
        id: 1,
        name: 'Camila',
        congregation: 'Jd. Vargem Grande',
      },
      {
        id: 2,
        name: 'Daniel',
        congregation: 'Jd. Vargem Grande',
      },
      {
        id: 3,
        name: 'Gediel',
        congregation: 'Jd. Capela',
      },
      {
        id: 4,
        name: 'Fernanda',
        congregation: 'Jd. São Judas',
      },
      {
        id: 5,
        name: 'Ana Carolina',
        congregation: 'Jd. Vargem Grande',
      },
      {
        id: 6,
        name: 'Sthephane',
        congregation: 'Jd. Capela',
      },
    ],
    musicians: [
      {
        id: 1,
        name: 'Lucas Henrique',
      },
      {
        id: 2,
        name: 'André Matheus',
      },
      {
        id: 3,
        name: 'Oseas Santana',
      },
      {
        id: 4,
        name: 'José Fabio',
      },
      {
        id: 5,
        name: 'Misael',
      },
      {
        id: 6,
        name: 'Thiago',
      },
      {
        id: 7,
        name: 'Aline',
      },
      {
        id: 8,
        name: 'Fabio',
      },
      {
        id: 9,
        name: 'Diana',
      },
      {
        id: 10,
        name: 'Vitor',
      },
      {
        id: 11,
        name: 'Jeferson',
      },
      {
        id: 12,
        name: 'Felipe',
      },
    ],
    outhers: [
      {
        id: 1,
        name: 'Leticia Batista',
        info: 'Tesoureira',
      },
      {
        id: 2,
        name: 'André Junior',
        info: 'Multimidia',
      },
    ],
  },
};

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'GET') {
    return response.json(data);
  } else {
    response.setHeader('Allow', 'GET');
    response.status(405).end('Method not allowed');
  }
};
