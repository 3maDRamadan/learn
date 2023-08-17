import Foot from "../comp/foot";
import Header from "../comp/header";
import MainContent from "../comp/mainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>HTML Page</title>
          <meta name="description" content="HTML" />
        </Helmet>
        <Header />
        <MainContent cont="Html" />
        <Foot />
      </HelmetProvider>
    </>
  );
};

export default Html;
