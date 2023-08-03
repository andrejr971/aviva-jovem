import { useKeenSlider } from 'keen-slider/react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import { v4 as uuid } from 'uuid';

import { Container, ContentSlider, Button, GroupButtons } from './styles';
import { BoardsProps } from './types';
import { CardShepherd, CardVolunteers } from '../cards';

import 'keen-slider/keen-slider.min.css';
import MediaMatch from '../media-match';

export function Boards({
  leaders,
  musicians,
  shepherds,
  volunteers,
}: BoardsProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3.5,
      spacing: 24,
    },
    loop: true,
    initial: 0,
    breakpoints: {
      '(max-width: 1280px)': {
        slides: { perView: 3, spacing: 24 },
      },
      '(max-width: 960px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(max-width: 640px)': {
        slides: { perView: 1, spacing: 12 },
      },
    },
  });

  return (
    <Container>
      <header>
        <h3>
          <span>Diretoria</span> do Aviva Jovem
        </h3>

        <MediaMatch greater="medium">
          <GroupButtons>
            <Button onClick={() => instanceRef.current?.prev()}>
              <CaretLeft size={24} />
            </Button>
            <Button onClick={() => instanceRef.current?.next()}>
              <CaretRight size={24} />
            </Button>
          </GroupButtons>
        </MediaMatch>
      </header>

      <ContentSlider ref={sliderRef} className="keen-slider">
        {shepherds.map(shepherd => (
          <CardShepherd
            key={uuid()}
            data={shepherd}
            className="keen-slider__slide"
          />
        ))}
        <CardVolunteers title="Líderes" className="keen-slider__slide">
          <ul>
            {leaders.map(leader => (
              <li key={leader.id}>
                {leader.name} - {leader.congregation}
              </li>
            ))}
          </ul>
        </CardVolunteers>
        <CardVolunteers title="Músicos" className="keen-slider__slide">
          <ul>
            {musicians.map(musician => (
              <li key={musician.id}>{musician.name}</li>
            ))}
          </ul>
        </CardVolunteers>
        <CardVolunteers
          title="Outros voluntários"
          className="keen-slider__slide"
        >
          <ul>
            {volunteers.map(volunteer => (
              <li key={volunteer.id}>
                {volunteer.name} - {volunteer.office}
              </li>
            ))}
          </ul>
        </CardVolunteers>
      </ContentSlider>

      <MediaMatch less="medium">
        <GroupButtons>
          <Button onClick={() => instanceRef.current?.prev()}>
            <CaretLeft size={24} />
          </Button>
          <Button onClick={() => instanceRef.current?.next()}>
            <CaretRight size={24} />
          </Button>
        </GroupButtons>
      </MediaMatch>
    </Container>
  );
}
