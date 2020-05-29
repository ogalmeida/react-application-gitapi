import styled, { css } from 'styled-components';
import { tint } from 'polished';

interface InputProps {
  hasError: boolean;
}

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #a8a8b3;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 10px;
  max-width: 450px;

  line-height: 56px;
`;

export const UserInfo = styled.section`
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #3a3a3a;

  img {
    display: block;
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  div {
    margin-left: 64px;

    @media only screen and (max-width: 714px){
      margin-left: unset;
    }

    strong {
      display: block;
      font-size: 32px;
      margin-top: 24px;
    }

    p {
      margin-top: 12px;
      font-size: 16px;
    }

    a {
      display: block;
      color: #3a3a3a;
      font-size: 16px;
      margin-top: 12px;
      text-decoration: none;
      transition: color 0.2s;

      display: flex;
      align-items: center;

      svg {
        margin-right: 12px;
      }

      &:hover{
        color: ${tint(0.25, '#3a3a3a')};
      }
    }
  }
`;

export const Input = styled.div<InputProps>`
  display: flex;
  align-items: center;
  color: #a8a8b3;
  border: 2px solid #fff;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 16px;

  ${props => props.hasError && css`border-color: #c53030;`}

  svg {
    margin-left: 12px;
  }

  input {
    flex: 1;
    border: 0;
    padding: 18px;

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 64px;
  color: #3a3a3a;

  > strong {
    display: block;
    font-size: 24px;
    margin-bottom: 12px;
  }

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    text-decoration: none;
    padding: 18px;
    display: block;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    & + a {
      margin-top: 8px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      strong {
        display: block;
        font-size: 18px;
        color: #3d3d4d;
      }

      p {
        margin-top: 4px;
        font-size: 16px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      color: #cbcbd6;
      margin-left: auto;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
