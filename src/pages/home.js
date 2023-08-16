import Foot from "../comp/foot";
import Header from "../comp/header";
import MainContent from "../comp/mainContent";
const Home = () => {
  return (
    <>
      <Header />
      <MainContent cont="Home" designer = "Emad Ramadan" />
      <Foot />
    </>
  );
};

export default Home;
