import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(p) => p.theme.cards};
  padding: 10px 0;
  overflow: hidden;
  border-radius: 10px;

  hr {
    margin: 0 20px;
    border: 1px solid ${(p) => p.theme.shadow};
  }

  @media (max-width: 900px) {
    background: transparent;
    box-shadow: none;
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
  /* color: ${(p) => p.theme.text}; */
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  /* margin: 0 20px; */
  text-decoration: none;
  color: ${(p) => p.theme.text};
  position: relative;

  &:hover,
  &.active {
    /* background-color: #eee; */

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      background: ${(p) => p.theme.colored};
      height: 100%;
    }
  }
`;
