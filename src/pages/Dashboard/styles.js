import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      background: #d44059;
      border-radius: 4px;
      height: 42px;
      width: 172px;
      display: flex;
      align-items: center;
      color: #fff;
      justify-content: center;
      font-weight: bold;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#d44059')};
      }

      div {
        margin-top: 5px;
        margin-right: 10px;
      }
    }

    strong {
      color: #fff;
      font-size: 32px;
    }
  }

  ul {
    display: grid;
    grid-gap: 10px;
    margin-top: 30px;
  }
`;

export const Meetup = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #fff;
    font-size: 20px;
    font-weight: normal;
  }

  aside {
    display: flex;
    align-items: center;

    span {
      color: #fff;
      font-size: 16px;
      font-weight: normal;
      margin: 0 15px;
    }

    button {
      border: 0;
      background: none;
      margin-top: 5px;
    }
  }
`;
