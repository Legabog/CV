import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const A = styled.a`
  position: relative;
  display: block;
  box-sizing: border-box;
  overflow: visible;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  cursor: pointer;
  transition: background-color 0.5s;

  path {
    fill: ${orange};
  }

  @media screen and (max-width: 900px) {
    width: 50px;
    height: 40px;

    svg {
      height: 28px;
      width: 28px;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 47px;
    height: 35px;

    svg {
      height: 24px;
      width: 24px;
    }
  }
  @media screen and (max-width: 400px) {
    width: 35px;
    height: 30px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  padding-left: 20px;
  border-left: 1px solid rgb(232, 176, 89);

  &:active ${A} {
    transform: scale(0.95);
  }

  @media screen and (max-width: 900px) {
    padding-left: 40px;
  }
  @media screen and (max-width: 450px) {
    padding-left: 20px;
  }
`;
