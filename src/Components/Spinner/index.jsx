import React from 'react';
import * as S from './styles';
import { Spinner } from 'react-bootstrap';

export default function index() {
  return (
    <S.SpinnerContainer>
      <Spinner animation='border' />
    </S.SpinnerContainer>
  );
}
