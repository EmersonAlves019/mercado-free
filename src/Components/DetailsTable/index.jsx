import React from 'react';
import * as S from './styles';

export default function DetailsTable(props) {
  const { attributes } = props;

  return (
    <S.DetailsContainer>
      <p>Informações detalhadas do produto</p>
      <table>
        <tbody>
          {attributes?.map(({ id, name, value_name }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{value_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.DetailsContainer>
  );
}
