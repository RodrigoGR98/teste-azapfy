import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  height: 300px;
  margin: 15px;
  background-color: white;
  border-radius: 5px;

  .country-flag {
    img {
      padding: 10px;
      width: 100%;
      height: 150px;
    }
  }

  .country-info {
    padding: 0 10px;
    display: flex;
    flex-direction: column;

    .country-name {
      margin-bottom: 5px;
      font-weight: bold;
    }
  }
`;
