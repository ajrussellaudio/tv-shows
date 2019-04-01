import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const StyledHeader = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 20px;
  background-color: #333333;

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colours.linkActive};
    }
  }
`;

const Header = () => (
  <ThemeProvider theme={theme}>
    <StyledHeader>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </StyledHeader>
  </ThemeProvider>
);

export default Header;
