import { useState, useCallback, memo } from "react";
import { Outlet, useParams } from "react-router-dom";
import { BsBook, BsGrid, BsListUl } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";
import DatabaseList from "../DatabaseList";
import { DATABASE_CLASS_ENTRIES } from "../../../constants/database";
import * as S from "./style";

const HomeLink = memo(({ isMobile }: { isMobile: boolean }) => (
  <S.HomeLink to="/" className={isMobile ? "mobile" : "desktop"}>
    <IoArrowBack aria-hidden="true" />
    <span>메인으로</span>
  </S.HomeLink>
));

HomeLink.displayName = "HomeLink";

const ViewToggle = memo(
  ({
    viewMode,
    onViewChange,
  }: {
    viewMode: "list" | "grid";
    onViewChange: (mode: "list" | "grid") => void;
  }) => (
    <S.ViewToggle>
      <S.IconButton
        active={viewMode === "list"}
        onClick={() => onViewChange("list")}
        title="리스트 보기"
      >
        <BsListUl aria-hidden="true" />
      </S.IconButton>
      <S.IconButton
        active={viewMode === "grid"}
        onClick={() => onViewChange("grid")}
        title="그리드 보기"
      >
        <BsGrid aria-hidden="true" />
      </S.IconButton>
    </S.ViewToggle>
  )
);

ViewToggle.displayName = "ViewToggle";

const SidebarHeader = memo(
  ({
    viewMode,
    onViewChange,
  }: {
    viewMode: "list" | "grid";
    onViewChange: (mode: "list" | "grid") => void;
  }) => (
    <S.SidebarHeader>
      <S.Title>
        <BsBook aria-hidden="true" />
        데이터베이스 수업 노트
      </S.Title>
      <ViewToggle viewMode={viewMode} onViewChange={onViewChange} />
    </S.SidebarHeader>
  )
);

SidebarHeader.displayName = "SidebarHeader";

const DatabaseLayout = () => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { id } = useParams();
  const isDetailView = Boolean(id);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleViewChange = useCallback((mode: "list" | "grid") => {
    setViewMode(mode);
  }, []);

  const handleSidebarClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <S.LayoutContainer>
      <S.MobileHeader>
        <HomeLink isMobile={true} />
        <S.MobileTitle>데이터베이스 수업 노트</S.MobileTitle>
        <S.MobileMenuToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <IoArrowBack aria-hidden="true" />
          ) : (
            <BsBook aria-hidden="true" />
          )}
        </S.MobileMenuToggle>
      </S.MobileHeader>

      <S.Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        isDetailView={isDetailView}
      >
        <S.TopSection>
          <HomeLink isMobile={false} />
        </S.TopSection>

        <SidebarHeader viewMode={viewMode} onViewChange={handleViewChange} />

        <S.SidebarContent onClick={handleSidebarClick}>
          <DatabaseList
            entries={DATABASE_CLASS_ENTRIES}
            viewMode={viewMode}
            onItemClick={closeMobileMenu}
          />
        </S.SidebarContent>
      </S.Sidebar>

      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.LayoutContainer>
  );
};

export default memo(DatabaseLayout);
