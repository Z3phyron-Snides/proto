import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(p) => p.theme.cards};
  padding: 10px 0;
  overflow: hidden;
  border-radius: 10px;

  height: 23vh;

  hr {
    margin: 0 20px;
    border: 1px solid ${(p) => p.theme.border};
  }

  @media (max-width: 900px) {
    background: transparent;
    box-shadow: none;
    display: flex;
    height: auto;
    background: ${(p) => p.theme.background};

    hr {
      display: none;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 20px;
  color: ${(p) => p.theme.colored};
`;

export const Description = styled.div`
  font-size: 16px;
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  /* margin: 0 20px; */
  text-decoration: none;
  color: ${(p) => p.theme.text};
  position: relative;

  @media screen and (max-width: 900px) {
    padding: 4px 12px;
  }

  @media screen and (max-width: 900px) {
    &.active {
      /* background-color: #eee; */

      &::before {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 0;
        width: 100%;
        background: ${(p) => p.theme.colored};
        height: 2px;
      }
    }
  }
`;
