import Footer from "../Footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import SchoolActivityButton from "../SchoolActivityButton";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <SchoolActivityButton />
      <Footer />
    </>
  );
};

export default HomeLayout;
