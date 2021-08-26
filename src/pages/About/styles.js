import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ededed;
  height: 100vh;
`;

export const Header = styled.div`
  height: 150px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 35px;
  display: flex;
  place-content: center;
  align-items: center;

  .about-button {
    width: 100px;
    height: 40px;
    position: absolute;
    border-radius: 10px;
    border: groove 2px #db6600;
    color: white;
    background-color: black;
    right: 60px;
    top: 60px;
    transition: background 0.2s linear;
    transition: color 0.2s linear;

    &:hover{
      background-color: #db6600;
      color: black;
    }
  }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    place-content: center;

    .about-modal {
      width: 500px;
      height: 300px;
      margin-top: 40px;
      border: 1px solid;
      background-color: white;
      display: flex;
      align-items: center;

      .foto-holder {
        padding-left: 40px;
        width: 40%;
        height: 100%;
        display: flex;
        align-items: center;

        img {
          width: 100%;
        }
      }

      .info-holder {
        width: 70%;
        height: 100%;
        display: flex;
        padding-left: 30px;
        flex-direction: column;
        place-content: center;

        span {
          margin-top: 5px;
        }
      }
    }
`;