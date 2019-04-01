import { createGlobalStyle } from "styled-components";

const TYPOGRAPHY_DOT_COM_PROJECT_KEY = "760084";

export const GlobalStyles = createGlobalStyle`
  @import url('https://cloud.typography.com/7457892/${TYPOGRAPHY_DOT_COM_PROJECT_KEY}/css/fonts.css');

  body {
    margin: 0;
    font-family: "Gotham A", "Gotham B", Gotham, sans-serif;
  }
`;
