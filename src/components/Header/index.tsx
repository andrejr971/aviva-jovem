import { Container } from './styles';

export function Header() {
  return (
    <Container className="navbar-container">
      <div>
        <button type="button" className="btn-menu">
          <span></span>
          <span></span>
        </button>

        <img
          src="assets/images/AvivaJovem.png"
          alt="Logo AvivaJovem 2021"
          className="logotipo"
        />
        <img
          src="assets/images/svg/logo.svg"
          alt="Logo AvivaJovem 2021"
          className="logo"
        />

        <button type="button" className="btn btn-primary">
          Participe
        </button>
      </div>
    </Container>
  );
}
