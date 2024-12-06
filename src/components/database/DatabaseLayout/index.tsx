import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { BsBook, BsGrid, BsListUl } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import DatabaseList from "../DatabaseList";
import * as S from "./style";
import { DATABASE_CLASS_ENTRIES } from "../../../constants/database";

const DatabaseLayout = () => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { id } = useParams();
  const isDetailView = !!id;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <S.LayoutContainer>
      {/* Mobile Header */}
      <S.MobileHeader>
        <S.HomeLink to="/" className="mobile">
          <IoArrowBack />
          <span>메인으로</span>
        </S.HomeLink>

        <S.MobileTitle>데이터베이스 수업 노트</S.MobileTitle>

        <S.MobileMenuToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <IoArrowBack /> : <BsBook />}
        </S.MobileMenuToggle>
      </S.MobileHeader>

      {/* Sidebar */}
      <S.Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        isDetailView={isDetailView}
      >
        <S.TopSection>
          <S.HomeLink to="/" className="desktop">
            <IoArrowBack />
            <span>메인으로</span>
          </S.HomeLink>
        </S.TopSection>

        <S.SidebarHeader>
          <S.Title>
            <BsBook />
            데이터베이스 수업 노트
          </S.Title>
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
        </S.SidebarHeader>

        <S.SidebarContent onClick={(e) => e.stopPropagation()}>
          <DatabaseList
            entries={DATABASE_CLASS_ENTRIES}
            viewMode={viewMode}
            onItemClick={closeMobileMenu}
          />
        </S.SidebarContent>
      </S.Sidebar>

      {/* Main Content */}
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.LayoutContainer>
  );
};

export default DatabaseLayout;
