import { Container } from './styles';
import { useState } from 'react';
import { IContributorsDTO, IShepherdsDTO } from '../../dtos/IBoardsDTO';
import { CardBoard } from '../Cards/CardBoard';
import { CardContributor } from '../Cards/CardContributor';
import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Board() {
  const [settings] = useState<Settings>({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    adaptiveHeight: true,
    // autoplay: true,
    // autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1216,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  const [shepherds] = useState<IShepherdsDTO[]>([
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
  ]);
  const [contributors] = useState<IContributorsDTO>({
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
        office: 'Media',
      },
      {
        id: 2,
        name: 'Daniela Araújo',
        office: 'Media',
      },
      {
        id: 3,
        name: 'Nycolly Cristiny',
        office: 'Media',
      },
      {
        id: 4,
        name: 'Natã Domingues',
        office: 'Media',
      },
      {
        id: 5,
        name: 'Letícia Batista',
        office: 'Tesoureira',
      },
    ],
  });

  return (
    <>
      <Container>
        <h3>Diretoria do Aviva Jovem</h3>

        <Slider {...settings} className="slider">
          {shepherds.map(shepherd => (
            <CardBoard key={shepherd.id} shepherd={shepherd} />
          ))}
          <CardContributor title="Líderes" leaders={contributors.leaders} />
          <CardContributor title="Músicos" musicians={contributors.musicians} />
          <CardContributor
            title="Outros Colaboradores"
            outhers={contributors.outhers}
          />
        </Slider>
      </Container>
    </>
  );
}
