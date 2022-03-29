import styled from 'styled-components';

export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const AsideImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85px;
  padding-top: 5px;
  height: 600px;

  overflow: auto;
  img {
    width: 50px;
    border: 0.5px solid #aaabab;
    height: 50px;
    margin-top: 10px;
    border-radius: 5px;
    object-fit: contain;

    &:hover {
      box-shadow: 0 0 1px 2px #005aff;
    }
  }
`;

export const CurrentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 600px;

  img {
    object-fit: contain;
    height: 80%;
    width: 80%;
  }
`;
