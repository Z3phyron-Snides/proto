import styled from "styled-components";


export const Container = styled.div`
 padding: 20px;
`;


export const Grid = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Media = styled.div`
 border-radius: 10px;
 overflow: hidden;

  & img,
  & video {
    width: 100%;
  }
`;

export const Image = styled.img`
  /* max-width: 100%; */
  /* height: auto; */
`;

export const Video = styled.video`
  /* width: 100%; */
  /* height: auto; */
  /* object-fit: cover; */
`;