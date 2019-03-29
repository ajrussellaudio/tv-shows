import Layout from "../components/Layout";
import { ApiRequest } from "../services/ApiRequest";

const Show = ({ name, summary, image }) => (
  <Layout>
    <h1>{name}</h1>
    <p>{summary.replace(/<[/]?[pb]>/g, "")}</p>
    <img src={image.medium} width="200" />
  </Layout>
);

Show.getInitialProps = async ({ query }) => {
  const { data: show } = await ApiRequest(`/shows/${query.id}`);
  return { ...show };
};

export default Show;
