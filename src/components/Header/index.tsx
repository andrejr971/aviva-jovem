import { FiShare2 } from 'react-icons/fi';
import { Button } from '../Button';

import { Container } from './styles';

export function Header() {
  return (
    <Container className="navbar-container">
      <div>
        <img
          src="assets/images/AvivaJovem.png"
          alt="Logo AvivaJovem 2021"
          className="logotipo"
        />

        <Button type="button">
          <FiShare2 />
          <span>Compartilhe</span>
        </Button>
      </div>
    </Container>
  );
}
