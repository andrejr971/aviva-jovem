import { ReactSVG } from 'react-svg';
import { useAction } from '../../hooks/actions';
import { Button } from '../Button';
import { ButtonsNav, Container, ContentNav, NavMobile } from './styles';

export function Header() {
  const { handleShare } = useAction();

  return (
    <Container>
      <ContentNav>
        <ReactSVG
          src="/assets/svg/logoaviva.svg"
          className="logo-aviva-desktop"
        />
        <ReactSVG src="/assets/svg/aviva.svg" className="logo-aviva-mobile" />

        <ul>
          <li>
            <ButtonsNav>Programação</ButtonsNav>
          </li>
          <li>
            <ButtonsNav>Como chegar</ButtonsNav>
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
  );
}
