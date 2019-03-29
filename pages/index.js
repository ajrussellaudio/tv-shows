import Link from "next/link";
import styled from "styled-components";

import Layout from "../components/Layout";
import { ApiRequest } from "../services/ApiRequest";
import { phoneAppAction } from "../services/PhoneApp";

const Title = styled.h1`
  color: red;
`;

const LinkText = styled("a")`
  color: chartreuse;
  text-decoration: none;

  :hover {
    color: hotpink;
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
  <Layout>
    <Title>Batman TV Shows</Title>
    <ul>
      {shows.map(show => (
        <ShowLink key={show.id} {...show} />
      ))}
    </ul>
    <button onClick={() => phoneAppAction("Hello", "World")}>Click me</button>
  </Layout>
);

Index.getInitialProps = async () => {
  const { data } = await ApiRequest("/search/shows?q=batman");
  return {
    shows: data.map(({ show }) => show)
  };
};

export default Index;
