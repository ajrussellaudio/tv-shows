import Layout from "../components/Layout";
import { ApiRequest } from "../services/ApiRequest";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

const Show = ({ name, summary, image }) => (
  <Layout>
    <h1>{name}</h1>
    <p>{summary.replace(/<[/]?[pb]>/g, "")}</p>
    <Image src={image.medium} />
  </Layout>
);

Show.getInitialProps = async ({ query }) => {
  const { data: show } = await ApiRequest(`/shows/${query.id}`);
  return { ...show };
};

export default Show;
