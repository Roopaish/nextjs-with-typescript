import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }:any) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
