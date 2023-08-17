import Foot from "../comp/foot";
import Header from "../comp/header";
import MainContent from "../comp/mainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <style type="text/css">{`
        h2{
          color: red;
          text-align: center;
          margin-top : 50px;
        }
        
    `}</style>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="HOME" />
        </Helmet>
        <Header />
        <h2>Hello World</h2>
        <MainContent cont="Home" designer="Emad Ramadan" />
        <Foot />
      </HelmetProvider>
    </>
  );
};

export default Home;
