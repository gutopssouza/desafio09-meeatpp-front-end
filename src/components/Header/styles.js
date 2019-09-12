import styled from 'styled-components';

export const Container = styled.div`
  background: #000000;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      color: #7159c1;

      img {
        margin-right: 20px;
        padding-right: 20px;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    height: 32px;
    width: 71px;
    border-radius: 4px;
    background: #d44059;
    color: #fff;
    border: none;
  }
`;
