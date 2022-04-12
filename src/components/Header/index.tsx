import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import { ModalShareLocation } from '../ModalShareLocation';
import { ButtonsNav, Container, ContentNav, NavMobile } from './styles';

export function Header() {
  const { handleShare } = useAction();
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <Container>
        <ContentNav>
          <ReactSVG
            src="/assets/svg/logoaviva.svg"
            className="logo-aviva-desktop"
          />
          <ReactSVG src="/assets/svg/aviva.svg" className="logo-aviva-mobile" />

          <ul>
            <li>
              <ButtonsNav onClick={handleOpenModal}>Como chegar</ButtonsNav>
            </li>
            <li>
              <Button
                title="Compartilhar"
                typeButton="secondary"
                colorWhite
                onClick={handleShare}
                type="button"
              />
            </li>
          </ul>

          <NavMobile>
            <Button
              type="button"
              title="Compartilhar"
              typeButton="secondary"
              colorWhite
              onClick={handleShare}
            />
          </NavMobile>
        </ContentNav>
      </Container>

      <ModalShareLocation isOpen={isOpenModal} onCloseModal={handleOpenModal} />
    </>
  );
}
