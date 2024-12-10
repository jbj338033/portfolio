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

// 상위 컴포넌트로부터의 props 변화가 없으므로 메모이제이션
export default memo(HomeLayout);
