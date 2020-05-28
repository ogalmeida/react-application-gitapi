import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 10px;
  max-width: 450px;

  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 20px;
  display: flex;
  max-width: 700px;
  height: 56px;

  input {
    border: 0;
    border-radius: 5px 0 0 5px;
    padding: 0 18px;
    flex: 1;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    border: 0;
    background: #04d361;
    color: #fff;
    transition: background-color 0.2s;
    border-radius: 0 5px 5px 0;
    font-weight: bold;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const User = styled.div`
  margin-top: 40px;
  max-width: 700px;
  list-style: none;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    text-decoration: none;
    padding: 12px;
    display: block;
    cursor: pointer;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    & + a {
      margin-top: 8px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 56px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 12px;

      strong {
        font-size: 14px;
        color: #3d3d4d;
      }

      p {
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
