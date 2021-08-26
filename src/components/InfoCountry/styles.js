import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  place-content: center;
`;

export const Modal = styled.div`
  width: 40%;
  height: 50%;
  background-color: white;
  position: relative;

  button {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background-color: unset;

    svg {
      font-size: 30px;
    }
  }
`;

export const Holder = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;

  .info-left {
    width: 50%;

    img {
      width: 100%;
      margin-bottom: 10px;
    }

    .country-data {
      margin-top: 15px;
    }
  }

  .info-right {
    width: 50%;
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
    }

    .country-data {
      margin-top: 17px;
      margin-left: 30px;
    }
  }

  .text-holder {
    display: flex;
    flex-direction: column;
  }
`;
