import styled from 'styled-components';

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

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      @media only screen and (max-width: 400px) {
        margin-top: 4px;
        margin-left: unset;
      }
      margin-left: 24px;
      flex: 1;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      strong {
        font-size: 36px;
        display: block;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
      }

      & + li {
        margin-left: 80px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    text-decoration: none;
    padding: 24px;
    display: block;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(16px);
    }

    img {
      width: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
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
