import Header from "./Header";
import Footer from "./Footer";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
