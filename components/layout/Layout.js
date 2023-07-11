import Navigation from "./Navigation";
import Footer from './Footer';

function Layout(props) {
  return (
    <div className={"flex flex-col"}>
      <Navigation />
      <main className={"w-full h-fit"}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
