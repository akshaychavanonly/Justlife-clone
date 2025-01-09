import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <div>
        <Header />
        <main style={{ padding: "20px" }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
