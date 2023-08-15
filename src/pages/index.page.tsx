'use-client';

import { GetStaticProps } from 'next';
import { v4 as uuid } from 'uuid';

import { HomeTemplate } from '@/templates';
import { HomeProps } from '@/templates/home/types';
import { ContributorDTO, LecturerDTO, ShepherdDTO } from '@/dtos';

export default function Home({
  leaders,
  musicians,
  shepherds,
  volunteers,
  lecturers,
}: HomeProps) {
  return (
    <HomeTemplate
      leaders={leaders}
      musicians={musicians}
      shepherds={shepherds}
      volunteers={volunteers}
      lecturers={lecturers}
    />
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const shepherds: ShepherdDTO[] = [
    {
      id: uuid(),
      name: 'Valdeonor Soares',
      office: 'Pastor Regional',
      profile: '/assets/images/boards/pr-valdeonor.jpg',
    },
    {
      id: uuid(),
      name: 'Josuel Cardoso',
      office: 'Pastor & Coordenador do Aviva',
      profile: '/assets/images/boards/pr-josuel.jpg',
    },
    {
      id: uuid(),
      name: 'Marcelo Costa',
      office: 'Pastor',
      profile: '/assets/images/boards/pr-marcelo.jpg',
    },
    {
      id: uuid(),
      name: 'Rafael Bertoldo',
      office: 'Pastor',
      profile: '/assets/images/boards/pr-rafael.jpg',
    },
  ];

  const contributors: ContributorDTO = {
    leaders: [
      {
        id: uuid(),
        name: 'Lucas Mathias',
        congregation: 'Jd. Vargem Grande',
      },
      {
        id: uuid(),
        name: 'Cp. Daniel Godoy',
        congregation: 'Jd. Vargem Grande',
      },
      {
        id: uuid(),
        name: 'Jaqueline Castro',
        congregation: 'Jd. Vargem Grande',
      },
      {
        id: uuid(),
        name: 'Gabriele Ferreira',
        congregation: 'Jd. Vargem Grande',
      },
      {
        id: uuid(),
        name: 'Co. Lucas Oliveira',
        congregation: 'Jd. Capela',
      },
      {
        id: uuid(),
        name: 'Co. Gidiel',
        congregation: 'Jd. Capela',
      },
      {
        id: uuid(),
        name: 'Pr. Deivide',
        congregation: 'Jd. São Judas',
      },
      {
        id: uuid(),
        name: 'Maria Vanessa',
        congregation: 'Jd. São Judas',
      },
    ],
    musicians: [
      {
        id: uuid(),
        name: 'Misael Yossef',
      },
      {
        id: uuid(),
        name: 'André Farias',
      },
      {
        id: uuid(),
        name: 'Lucas Henrique',
      },
      {
        id: uuid(),
        name: 'Thiago Soares',
      },
      {
        id: uuid(),
        name: 'Aline Cordeiro',
      },
      {
        id: uuid(),
        name: 'Robert Xavier',
      },
      {
        id: uuid(),
        name: 'Fábio',
      },
    ],
    outhers: [
      {
        id: uuid(),
        name: 'André Junior',
        office: 'Mídia',
      },
      {
        id: uuid(),
        name: 'Daniela Araújo',
        office: 'Mídia',
      },
      {
        id: uuid(),
        name: 'Nycolly Cristiny',
        office: 'Mídia',
      },
      {
        id: uuid(),
        name: 'Natã Oliveira',
        office: 'Mídia',
      },
      {
        id: uuid(),
        name: 'Nathan Lopes',
        office: 'Mídia',
      },
      {
        id: uuid(),
        name: 'Micheli Barão',
        office: 'Mídia',
      },
      {
        id: uuid(),
        name: 'Letícia Batista',
        office: 'Tesoureira',
      },
    ],
  };

  const lecturers: LecturerDTO[] = [
    {
      id: uuid(),
      name: 'Pr. Ailton Santos',
      office: 'Preletor',
      profile: '/assets/images/lecturer/lecturer2.png',
    },
    {
      id: uuid(),
      name: 'Matheus do Sax',
      office: 'Louvor',
      profile: '/assets/images/lecturer/sing2.png',
    },
    {
      id: uuid(),
      name: 'Pr. Besaliel Cavalcante',
      office: 'Preletor',
      profile: '/assets/images/lecturer/lecturer1.png',
    },
    {
      id: uuid(),
      name: 'Debora Cavalcante',
      office: 'Cantora',
      profile: '/assets/images/lecturer/sing.png',
    },
  ];

  return {
    props: {
      leaders: contributors.leaders,
      musicians: contributors.musicians,
      volunteers: contributors.outhers,
      shepherds,
      lecturers,
    },
  };
};
