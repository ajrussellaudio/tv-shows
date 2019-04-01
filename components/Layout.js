import Header from "./Header";
import styled from "styled-components";

const PaddedLayout = styled.div`
  padding: 10px;
  margin-top: 20px;
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <PaddedLayout>{children}</PaddedLayout>
  </React.Fragment>
);

export default Layout;
