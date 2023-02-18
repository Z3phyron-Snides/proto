import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.border};
  padding: 6px 12px;
  border-radius: 24px;
  margin-left: auto;
`;

const SearchIcon = styled(FiSearch)`
  color: ${(p) => p.theme.content};
  font-size: 20px;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  background: transparent;
  padding: 5px;
  border: none;
  outline: none;
  font-size: 14px;
  color: ${(p) => p.theme.text};
  &::placeholder {
    color: ${(p) => p.theme.shadow};
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder="Search..." type={'search'} />
    </SearchContainer>
  );
};

export default Search;
