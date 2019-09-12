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

    div {
      display: flex;
      align-items: center;
      button#btEdit {
        border: 0;
        background: #4dbaf9;
        border-radius: 4px;
        height: 32px;
        width: 96px;
        display: flex;
        align-items: center;
        color: #fff;
        justify-content: space-around;
        font-weight: bold;
        margin-right: 10px;
        padding: 0 10px;

        transition: background 0.2s;

        &:hover {
          background: ${darken(0.08, '#4DBAF9')};
        }
      }

      button#btCancel {
        border: 0;
        background: #d44059;
        border-radius: 4px;
        height: 32px;
        width: 96px;
        display: flex;
        align-items: center;
        color: #fff;
        justify-content: space-around;
        font-weight: bold;
        padding: 0 10px;

        transition: background 0.2s;

        &:hover {
          background: ${darken(0.08, '#d44059')};
        }
      }
    }

    strong {
      color: #fff;
      font-size: 32px;
    }
  }

  p {
    display: flex;
    justify-content: flex-start;
    color: #fff;
    font-size: 18px;
    margin-bottom: 30px;
  }
  footer {
    display: flex;
    justify-content: flex-start;
    color: rgba(255, 255, 255, 0.3);
    font-size: 16px;
    span {
      display: flex;
      align-items: center;
      margin-right: 30px;
      svg {
        margin-right: 5px;
      }
    }
  }
`;

export const Banner = styled.div`
  height: 300px;
  width: 600px;
  max-width: 600px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.3);
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 600px;
    height: 300px;
    border-radius: 4px;
  }
  span {
    color: #fff;
    font-size: 16px;
  }
`;
