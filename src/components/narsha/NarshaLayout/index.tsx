import { Outlet } from "react-router-dom";
import * as S from "./style";
import NarshaList from "../NarshaList";
import { NARSHA_ENTRIES } from "../../../constants/narsha";
import { useState } from "react";
import { IoMdArrowBack, IoMdMenu, IoMdHome } from "react-icons/io";

const NarshaLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <S.Container>
      <S.Sidebar isOpen={isSidebarOpen}>
        <S.SidebarHeader>
          <S.Nav>
            <S.HomeLink to="/">
              <IoMdHome />
              홈으로 이동
            </S.HomeLink>
            <S.IconButton
              onClick={() => setIsSidebarOpen(false)}
              aria-label="사이드바 접기"
            >
              <IoMdArrowBack />
            </S.IconButton>
          </S.Nav>
          <S.SidebarTitle>나르샤 활동 일지</S.SidebarTitle>
        </S.SidebarHeader>
        <S.SidebarContent>
          <NarshaList entries={NARSHA_ENTRIES} compact />
        </S.SidebarContent>
      </S.Sidebar>

      {!isSidebarOpen && (
        <S.MinimalSidebar>
          <S.MinimalNav>
            <S.IconButton
              onClick={() => setIsSidebarOpen(true)}
              aria-label="사이드바 펼치기"
            >
              <IoMdMenu />
            </S.IconButton>
            <S.MinimalHomeLink to="/">
              <IoMdHome />
            </S.MinimalHomeLink>
          </S.MinimalNav>
        </S.MinimalSidebar>
      )}

      <S.Main isSidebarOpen={isSidebarOpen}>
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
      </S.Main>
    </S.Container>
  );
};

export default NarshaLayout;
