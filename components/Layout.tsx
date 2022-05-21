import Navbar from "./Navbar";
import Footer from "./Footer";

type props = {
  children: JSX.Element;
};

export default function Layout(props: props) {
  return (
    <>
      <div className="layout">
        <h2 className="layout__logo">Beautifull Posters</h2>
      </div>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
