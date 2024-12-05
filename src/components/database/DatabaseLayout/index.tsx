import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { BsBook, BsGrid, BsListUl } from "react-icons/bs";
import { IoMdHome } from "react-icons/io";
import DatabaseList from "../DatabaseList";
import * as S from "./style";
import { DATABASE_CLASS_ENTRIES } from "../../../constants/database";

const DatabaseLayout = () => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const { id } = useParams();
  const isDetailView = !!id;

  return (
    <S.Container>
      <S.Sidebar isDetailView={isDetailView}>
        <S.SidebarHeader>
          <S.TopBar>
            <S.HomeLink to="/">
              <IoMdHome />
              <span>홈으로</span>
            </S.HomeLink>
            <S.ViewToggle>
              <S.IconButton
                active={viewMode === "list"}
                onClick={() => setViewMode("list")}
                title="리스트 보기"
              >
                <BsListUl />
              </S.IconButton>
              <S.IconButton
                active={viewMode === "grid"}
                onClick={() => setViewMode("grid")}
                title="그리드 보기"
              >
                <BsGrid />
              </S.IconButton>
            </S.ViewToggle>
          </S.TopBar>
          <S.Title>
            <BsBook />
            데이터베이스 수업 노트
          </S.Title>
        </S.SidebarHeader>
        <S.SidebarContent>
          <DatabaseList entries={DATABASE_CLASS_ENTRIES} viewMode={viewMode} />
        </S.SidebarContent>
      </S.Sidebar>
      <S.Main isDetailView={isDetailView}>
        <Outlet />
      </S.Main>
    </S.Container>
  );
};

export default DatabaseLayout;
