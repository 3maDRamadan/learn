import Foot from "../comp/foot";
import Header from "../comp/header";
import MainContent from "../comp/mainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Javascript = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>JS Page</title>
          <meta name="description" content="JS" />
        </Helmet>
        <Header />
        <MainContent cont="JS" />
        <Foot />
      </HelmetProvider>
    </>
  );
};

export default Javascript;
