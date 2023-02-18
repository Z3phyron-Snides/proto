import styled from "styled-components";

export const Container = styled.div`
/* background: #ffffff;
padding: 20px;
border-radius: 20px; */
`;
export const CoverPhoto = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 20px;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const UpdateBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  outline: none;
  border: none;
  color: #fff;
  background: ${(p) => p.theme.shadow};
  padding: 10px 25px;
  border-radius: 10px;
  overflow: hidden;

  input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

export const Dp = styled.div`
  margin-left: 5%;
  margin-top: -7%;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    margin-top: -15%;
  }

  .user {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    color: ${(p) => p.theme.text};
    /* justify-content: flex-end; */

    .info {
      z-index: 3;
      .name {
        font-size: 16px;
        font-weight: 500;
      }
      .username {
        /* font-size: 1px; */
        color: ${(p) => p.theme.content};
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 8px;

  padding: 8px;
  font-size: 10px;

  .change {
    position: relative;
    overflow: hidden;
    color: ${(p) => p.theme.text};

    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }

  .del {
    color: red;
  }
`;

export const Request = styled.button`
float: right;
padding: 10px 15px;
border: none;
outline: none;
background: #9541e3;
border-radius: 8px;
color: #fff;
`;
