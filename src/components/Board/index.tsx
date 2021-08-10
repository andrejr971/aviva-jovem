import { useState, useRef, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { IndexProps } from '../../dtos/IBoardsDTO';
import { Modal } from '../Modal';
import { Title } from '../Title';

import {
  CardLeaders,
  CardPrincipal,
  Container,
  Content,
  ContentBoard,
  ControlSlider,
} from './styles';

export function Board({ boards }: IndexProps) {
  const divRef = useRef<HTMLDivElement>(null);

  const [isAvailablePrevious, setIsAvailablePrevious] = useState(false);
  const [isAvailableNext, setIsAvailableNext] = useState(false);
  const [index, setIndex] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsAvailablePrevious(true);
      return;
    }

    if (index === 3) {
      setIsAvailableNext(true);
      return;
    }

    setIsAvailableNext(false);
    setIsAvailablePrevious(false);
  }, [index]);

  function handleScrollPrevious() {
    divRef.current.scroll({
      left: divRef.current.scrollLeft - 360,
      behavior: 'smooth',
    });

    if (index - 1 <= 0) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  }

  function handleScrollNext() {
    divRef.current.scroll({
      left: divRef.current.scrollLeft + 360,
      behavior: 'smooth',
    });

    if (index + 1 >= 3) {
      setIndex(3);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <Container>
      <Content>
        <Title>
          <h2>
            Diretória do
            <span>Aviva Jovem</span>
          </h2>
        </Title>

        <ControlSlider>
          <button onClick={handleScrollPrevious} disabled={isAvailablePrevious}>
            <FiArrowLeft />
          </button>

          <button onClick={handleScrollNext} disabled={isAvailableNext}>
            <FiArrowRight />
          </button>
        </ControlSlider>

        <ContentBoard ref={divRef}>
          {boards.principal.map(principal => (
            <CardPrincipal key={principal.id}>
              <img src={principal.perfil} alt={`Foto do ${principal.name}`} />
              <div>
                <h4>{principal.name}</h4>
                <strong>{principal.office}</strong>
              </div>
            </CardPrincipal>
          ))}
          <CardLeaders>
            <div>
              <h5>Líderes:</h5>
              <ul>
                {boards.outhers.leaders.map(leader => (
                  <li key={leader.id}>
                    <strong>{leader.name}</strong>
                    <span>({leader.congregation})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5>Músicos:</h5>
              <ul>
                <li>
                  <strong>Lucas Henrique</strong>
                </li>
                <li>
                  <strong>André Matheus</strong>
                </li>
                <li>
                  <strong>Oseas Santana</strong>
                </li>
                <li>
                  <button type="button" onClick={() => setIsOpenModal(true)}>
                    Ver mais
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h5>Outros:</h5>
              <ul>
                {boards.outhers.outhers.map(outher => (
                  <li key={outher.id}>
                    <strong>{outher.name}</strong>
                    <span>({outher.info})</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardLeaders>
        </ContentBoard>
      </Content>

      <Modal isOpen={isOpenModal} onCloseModal={() => setIsOpenModal(false)}>
        <CardLeaders>
          <h5>Músicos:</h5>
          <ul>
            {boards.outhers.musicians.map(musician => (
              <li key={musician.id}>
                <strong>{musician.name}</strong>
              </li>
            ))}
          </ul>
        </CardLeaders>
      </Modal>
    </Container>
  );
}
