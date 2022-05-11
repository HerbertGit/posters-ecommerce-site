import Navbar from "./Navbar";
import Footer from "./Footer";

type props = {
  children: JSX.Element;
};

export default function Layout(props: props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
