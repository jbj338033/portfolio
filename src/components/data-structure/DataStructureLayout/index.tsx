import { Outlet, useLocation, useParams } from "react-router-dom";
import { memo, useCallback, useEffect, useState } from "react";
import { IoMdArrowBack, IoMdMenu, IoMdHome } from "react-icons/io";
import * as S from "./style";
import DataStructureList from "../DataStructureList";
import { DATA_STRUCTURES } from "../../../constants/dataStructure";

interface SidebarProps {
  structure: (typeof DATA_STRUCTURES)[0] | null | undefined;
  onClose: () => void;
}

const Sidebar = memo(({ structure, onClose }: SidebarProps) => (
  <S.SidebarHeader>
    <S.Nav>
      <S.HomeLink to="/data-structure">
        <IoMdHome />
        자료구조 목록
      </S.HomeLink>
      <S.Button onClick={onClose} aria-label="사이드바 접기">
        <IoMdArrowBack />
      </S.Button>
    </S.Nav>
    <S.SidebarTitle>{structure?.title || "자료구조 정리"}</S.SidebarTitle>
    <S.Category>{structure?.category}</S.Category>
  </S.SidebarHeader>
));

Sidebar.displayName = "Sidebar";

const DataStructureLayout = () => {
  const location = useLocation();
  const { structureId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isListPage = location.pathname === "/data-structure";
  const currentStructure = structureId
    ? DATA_STRUCTURES.find((s) => s.id === Number(structureId)) ?? null
    : null;

  const handleSidebarClose = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const handleOverlayClick = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    if (isListPage) {
      setIsSidebarOpen(false);
    }
  }, [isListPage]);

  return (
    <S.Container>
      <S.HomeNav>
        <S.HomeLink to="/">
          <IoMdHome />
        </S.HomeLink>
      </S.HomeNav>

      {!isListPage && (
        <>
          <S.Overlay isVisible={isSidebarOpen} onClick={handleOverlayClick} />

          <S.Sidebar isOpen={isSidebarOpen}>
            <Sidebar
              structure={currentStructure}
              onClose={handleSidebarClose}
            />
            <S.SidebarContent>
              {currentStructure && (
                <DataStructureList
                  topics={currentStructure.topics}
                  structureId={currentStructure.id}
                  compact
                />
              )}
            </S.SidebarContent>
          </S.Sidebar>

          <S.MinimalSidebar isOpen={!isSidebarOpen}>
            <S.MinimalNav>
              <S.Button
                onClick={() => setIsSidebarOpen(true)}
                aria-label="사이드바 펼치기"
              >
                <IoMdMenu />
              </S.Button>
              <S.MinimalHomeLink to="/data-structure">
                <IoMdHome />
              </S.MinimalHomeLink>
            </S.MinimalNav>
          </S.MinimalSidebar>
        </>
      )}

      <S.Main isOpen={isSidebarOpen} isListPage={isListPage}>
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
      </S.Main>
    </S.Container>
  );
};

export default DataStructureLayout;
