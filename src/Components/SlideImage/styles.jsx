import styled from 'styled-components';

export const Container = styled.div`
  height: 361px;
  width: 60%;
  margin: 0 auto;

  /* * {
    border: 1px solid red;
  } */

  .css-1ps6pg7-MuiPaper-root {
    text-align: center;

    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    border-radius: none;
    box-shadow: none;
  }
  .css-1ps6pg7-MuiPaper-root:active {
    border: none;
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }

  img {
    border: none;

    width: 410px;
    height: 310px;
    object-fit: contain;
  }

  transition: all 0.3s;
`;
