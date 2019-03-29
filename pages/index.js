import Link from "next/link";
import Layout from "../components/Layout";
import Axios from "axios";
import { ApiRequest } from "../services/ApiRequest";

const ShowLink = ({ id, name }) => (
  <li key={id}>
    <Link as={`/p/${id}`} href={`/post?id=${id}`}>
      <a>{name}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        font-family: "Arial";
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

const Index = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(show => (
        <ShowLink key={show.id} {...show} />
      ))}
    </ul>
    <style jsx>{`
      h1 {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async () => {
  const { data } = await ApiRequest("/search/shows?q=batman");
  return {
    shows: data.map(({ show }) => show)
  };
};

export default Index;
