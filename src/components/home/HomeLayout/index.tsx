import { memo } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import SchoolActivityButton from "../SchoolActivityButton";
import * as S from "./style";

const HomeLayout = () => {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <SchoolActivityButton />
      <Footer />
    </S.Container>
  );
};

export default memo(HomeLayout);
