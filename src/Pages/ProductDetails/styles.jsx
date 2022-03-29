import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export const ProductDetailsContainer = styled.div`
  width: 70%;
`;

export const Banner = styled.div`
  height: 250px;
  width: 100vw;
  background-image: url(https://http2.mlstatic.com/storage/official-stores-images/multimveis/background202002130329.jpg);
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 15px 15px 0 0;
  border-radius: 10px;

  padding: 15px;

  border: 1px solid #dbd9d9;

  width: 30%;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: #f9f9f9;
  width: 65%;
  margin-top: -110px;
  border-radius: 5px;

  border-top: 50px solid #e5e5e5;
`;

export const ProductTitle = styled.div`
  display: flex;
  justify-content: space-around;

  h1 {
    font-size: 20px;
    width: 80%;
  }
`;

export const OutlineHeart = styled(AiOutlineHeart)`
  width: 25px;
  height: 30px;
  color: #3483fa;
`;

export const FillHeart = styled(AiFillHeart)`
  width: 25px;
  height: 30px;
  color: red;
`;


export const Condition = styled.div`
  width: 50%;
  height: 25px;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  span {
    width: 60px;
    border-right: 1px solid #a9a9a9;
  }
`;

export const PriceInfos = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column ;
  align-items: flex-start ;


  p {
    text-decoration: line-through;
    color: gray;
  }

  span {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: space-around;  ;
    font-size: 30px;
    font-weight: 300;
  }

  h5 {
    color: #16AE5F
  }
`;
