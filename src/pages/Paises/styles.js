import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ededed;
`;

export const Header = styled.div`
  height: 150px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 28px;
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

  .cropped {
    margin-right: 40px;
    width: 130px; 
    height: 130px; 
    overflow: hidden;
    border: 5px solid black;
  }

  .cropped img {
    margin: -40px 0px 0px -140px;
  }
`

export const Content = styled.div`
  padding: 20px 15%;

  .filtering {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;

    .select-region {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      .pagination {
        display: flex;
        align-items: center;
        margin-right: 10px;

        .change-page {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          place-content: center;
          border: solid 1px black;
          border-radius: 50%;
          margin-left: 10px;
          transition: background 0.2s linear;
          transition: color 0.2s linear;
    
          &:hover{
            background: black;
            color: white;
          }

          &:disabled {
            opacity: 0.4;
          }
        }
      }

      label {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
    }
  }
`

export const Countries = styled.div`
  width: 100%;
  display: flex;
  place-content: center;
  flex-wrap: wrap;
`
