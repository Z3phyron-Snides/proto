import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Fira Code';
    
 
    }

    body {
      background: ${(props) => props.theme.background};
    }

    .editor {
 
    /* overflow: hidden; */
    /* background: transparent; */
    border-radius: 20px;
    color: ${(props) => props.theme.text};
    background: #eeecec;
    /* border: none; */
}


`;
export const darkTheme = {
  background: "rgba(52, 50, 70, 0.64)",
  text: "#fff",
  colored: "rgba(143, 127, 232, 0.986)",
  shadow: "rgba(255, 255, 255, 0.15)",
  content: "#7D70BA",
  border: "rgba(255, 255, 255, 0.1)",
  links: {
    color: "#7D70BA",
    active: "#7D70BA",
  },
  button: {
    background: "#7D70BA",
    text: "#fff",
    hover: {
      background: "#7D70BA",
      text: "#fff",
    },
  },
  overlays: "rgba(0, 0, 0, 0.7)",
  cards: "rgb(65, 65, 65)",
};

export const lightTheme = {
  background: "rgba(115, 111, 164, 0.15)",
  text: "#333",
  colored: "rgba(102, 79, 232, 0.849)",
  shadow: "rgba(0, 0, 0, 0.15)",
  content: "#7D70BA",
  border: "rgba(0, 0, 0, 0.1)",
  links: {
    color: "#7D70BA",
    active: "#7D70BA",
  },
  button: {
    background: "#7D70BA",
    text: "#fff",
    hover: {
      background: "#7D70BA",
      text: "#fff",
    },
  },
  overlays: "rgba(255, 255, 255, 0.7)",
  cards: "#ffffff",
};

