import styled from "styled-components";

export const Container = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.068);
    padding: 7px;
    outline: none;
    border: none;
    padding-right: 12px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 400;
    transition: all 0.3s ease;
    color: ${(p) => p.theme.text};

    span {
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-right: 5px;
      font-size: 17px;
      background: rgba(0, 0, 0, 0.068);

      @media screen and (max-width: 900px) {
        /* width: 17px; */
        /* height: 17px; */
        margin-right: 0;
        /* font-size: 13px; */
      }
    }

    @media screen and (max-width: 900px) {
      padding: 7px;
      /* padding-right: 0; */

      small {
        display: none;
      }
    }

    &:hover {
      transform: scale(1.04);
    }
    &.open {
      background: rgba(238, 32, 90, 0.302);

      .icon {
        background: #ee205b;
        color: #fff;
      }
    }
  }

  .content {
    padding: 20px;
  }
`;
