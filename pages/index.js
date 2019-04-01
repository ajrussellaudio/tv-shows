import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";

import Layout from "../components/Layout";
import { ApiRequest } from "../services/ApiRequest";
import { phoneAppAction } from "../services/PhoneApp";

const theme = {
  colours: {
    primary: "#333333",
    secondary: "#ffffff",
    link: "#333388",
    linkActive: "#3333dd"
  }
};

const Title = styled.h1`
  color: ${({ theme }) => theme.colours.primary};
`;

const LinkText = styled("a")`
  color: ${({ theme }) => theme.colours.link};
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colours.linkActive};
  }
`;

const ShowLink = ({ id, name }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?id=${id}`}>
      <LinkText>{name}</LinkText>
    </Link>
  </li>
);

const Index = ({ shows }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Title>Batman TV Shows</Title>
      <ul>
        {shows.map(show => (
          <ShowLink key={show.id} {...show} />
        ))}
      </ul>
      <button onClick={() => phoneAppAction("Hello", "World")}>Click me</button>
    </Layout>
  </ThemeProvider>
);

Index.getInitialProps = async () => {
  const { data } = await ApiRequest("/search/shows?q=batman");
  return {
    shows: data.map(({ show }) => show)
  };
};

export default Index;
