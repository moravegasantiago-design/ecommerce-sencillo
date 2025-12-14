import Header, {
  SearchDesklop,
  SearchMovil,
  BtnAccion,
} from "./caja-componentes/Header.tsx";
import Body, { Title, Nav, CardProduct } from "./caja-componentes/Body.tsx";
import Footer from "./caja-componentes/Footer.tsx";

const App = () => {
  return (
    <>
      <Header
        inputDesklop={<SearchDesklop />}
        inputMovil={<SearchMovil />}
        Buttons={<BtnAccion />}
      />
      <Body
        Title={<Title option="Audio" />}
        Nav={<Nav />}
        CardProduct={<CardProduct />}
      />
      <Footer />
    </>
  );
};
export default App;
