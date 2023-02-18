import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  z-index: 1;

  .splide .splide__arrows,
  .splide .splide__pagination {
    display: none;
  }

  .slider {
    width: 100px;
    overflow: visible;
  }
`;
