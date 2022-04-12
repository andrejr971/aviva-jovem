import styled from 'styled-components';

export const Container = styled.section`
  position: relative;

  z-index: 1;
`;

export const Content = styled.div`
  margin-top: 72px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }

  z-index: 1;
`;

export const CardLecturer = styled.div`
  width: 384px;
  height: 400px;

  display: block;
  position: relative;

  border: 3px solid;
  border-image: linear-gradient(180deg, #e46713 0%, rgba(228, 103, 19, 0) 100%)
    1;

  background: linear-gradient(var(--white-light), var(--white-light))
      padding-box,
    linear-gradient(180deg, #e46713 0%, rgba(228, 103, 19, 0) 100%) border-box;

  border: 3px solid transparent;
  border-radius: 24px;

  z-index: 1;

  img {
    width: 100%;
  }

  & + div {
    margin-left: 32px;
  }

  @media screen and (max-width: 960px) {
    & + div {
      margin-left: 0px;
      margin-top: 48px;
    }
  }
`;

export const Profile = styled.div`
  position: absolute;
  z-index: 2;

  bottom: -24px;
  width: 336px;
  /* height: 72px; */

  background: var(--white-light);
  padding: 8px 48px;
  /* height: 56px; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--gray-3);
  border-radius: 56px;

  left: 50%;
  transform: translateX(-50%);

  h5 {
    font: var(--title-6);
    color: var(--black);
  }

  strong {
    font: var(--text-6);
    color: var(--gray-2);
  }
`;

export const Bakcground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: -1;

  top: 0;
  left: 0;

  overflow: hidden;

  display: flex;
  align-items: center;

  opacity: 0.3;
`;
