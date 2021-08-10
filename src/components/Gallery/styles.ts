import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin-top: 27.2rem;

  background: url('assets/images/svg/blur.svg') center center no-repeat;

  .gallery {
    width: 100%;
    max-width: 1416px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    grid-template-rows: 35rem 35rem 35rem;
    gap: 2.4rem;

    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;

      border-radius: 3.2rem;

      box-shadow: var(--shadow_black);
    }

    padding: 0.8rem;
  }
`;
