import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoMdArrowBack, IoMdMenu, IoMdHome } from "react-icons/io";
import { BsBook } from "react-icons/bs";
import DatabaseClassList from "../DatabaseList";
import * as S from "./style";
import { DATABASE_CLASS_ENTRIES } from "../../../constants/database";

const DatabaseLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <S.Container>
      <S.Sidebar isOpen={isSidebarOpen}>
        <S.SidebarHeader>
          <S.Nav>
            <S.HomeLink to="/">
              <IoMdHome />
              메인으로
            </S.HomeLink>
            <S.IconButton
              onClick={() => setIsSidebarOpen(false)}
              aria-label="사이드바 접기"
            >
              <IoMdArrowBack />
            </S.IconButton>
          </S.Nav>
          <S.SidebarTitle>
            <BsBook className="text-blue-400" />
            데이터베이스 수업 기록
          </S.SidebarTitle>
        </S.SidebarHeader>
        <S.SidebarContent>
          <DatabaseClassList entries={DATABASE_CLASS_ENTRIES} compact />
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

export default DatabaseLayout;
