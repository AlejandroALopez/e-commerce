import Navigation from "./Navigation";
import Footer from './Footer';

function Layout(props: any) {
  return (
    <div className={"flex flex-col bg-background"}>
      <Navigation />
      <main className={"w-full h-fit"}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
