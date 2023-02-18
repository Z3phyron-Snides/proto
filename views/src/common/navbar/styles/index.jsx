import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 0 5%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  gap: 30px;
  top: 0;
  left: 0;
  z-index: 5;
  background: ${p => p.theme.cards};

  .toggle {
    margin-left: auto;
  }

  @media (max-width: 900px) {
    .toggle {
      display: none;
    }
  }
`;
export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: ${(p) => p.theme.content};
  transition: all 0.3s ease-in-out;

  span {
    color: ${(p) => p.theme.text};
  }

  &:hover {
    transform: scale(1.06);
  }
`;
