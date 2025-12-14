import Header from "./caja-componentes/header.tsx";
import Body, { Title, Nav, CardProduct } from "./caja-componentes/Body.tsx";
import Footer from "./caja-componentes/Footer.tsx";

const App = () => {
  return (
    <>
      <Header />
      <Body Title={<Title />} Nav={<Nav />} CardProduct={<CardProduct />} />
      <Footer />
    </>
  );
};
export default App;
