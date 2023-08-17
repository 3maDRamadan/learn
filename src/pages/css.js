import Foot from "../comp/foot";
import Header from "../comp/header";
import MainContent from "../comp/mainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Css = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>CSS Page</title>
          <meta name="description" content="css" />
        </Helmet>
        <Header />
        <MainContent cont="Css" />
        <Foot />
      </HelmetProvider>
    </>
  );
};

export default Css;
