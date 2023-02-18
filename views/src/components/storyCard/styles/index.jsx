import styled from "styled-components";


export const Container = styled.div`
  width: 100px;
  height: 150px;
  background: linear-gradient(
      to bottom,
      rgba(131, 131, 132, 0.017),
      rgba(63, 62, 63, 0.238)
    ),
    url(${(p) => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 2px 3px 10px 5px #ebebeb;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  z-index: 1;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #fff;

  button {
    width: 30px;
    height: 30px;
    outline: none;
    border: 2px solid #fff;
    border-radius: 4px;
    font-size: 20px;
    padding: 2px;
    margin: 5px auto;
    background: transparent;

    span {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      background: #fff;
      color: #000;
    }
  }
`;
