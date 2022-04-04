import { ReactSVG } from 'react-svg';

import { Container, BackgroundHero, Content } from './styles';

export function Home() {
  return (
    <Container>
      <BackgroundHero>
        <ReactSVG src="assets/images/hero.svg" />
      </BackgroundHero>

      <Content>
        <ReactSVG src="assets/images/logo.svg" />
        <h1>Boilerplate NextJS</h1>

        <h2>Este projeto usa muitas coisas como:</h2>

        <ul>
          <li>
            <a href="https://nextjs.org" target="blank">
              NextJS
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org" target="blank">
              Typescript
            </a>
          </li>
          <li>
            <a href="https://styled-components.com" target="blank">
              Styled Components
            </a>
          </li>
          <li>
            <a href="https://jestjs.io" target="blank">
              Jest
            </a>
          </li>
          <li>
            <a
              href="https://testing-library.com/docs/react-testing-library/intro/"
              target="blank"
            >
              React Testing Library
            </a>
          </li>
          <li>
            <a href="https://eslint.org" target="blank">
              Eslint
            </a>
          </li>
          <li>
            <a href="https://prettier.io" target="blank">
              Prettier
            </a>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
