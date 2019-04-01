import Link from "next/link";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

import Layout from "../components/Layout";
import { ApiRequest } from "../services/ApiRequest";
import { phoneAppAction } from "../services/PhoneApp";

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

const Button = styled.div`
  margin: 10px;
  padding: 10px;
  display: inline-block;
  background-color: ${({ theme }) => theme.colours.primary};
  color: ${({ theme }) => theme.colours.secondary};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
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
      <Title>List of TV Shows</Title>
      <ul>
        {shows.map(show => (
          <ShowLink key={show.id} {...show} />
        ))}
      </ul>
      <Button onClick={() => phoneAppAction("Hello", "World")}>Click me</Button>
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
