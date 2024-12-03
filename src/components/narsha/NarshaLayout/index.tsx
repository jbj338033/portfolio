import { Outlet, useLocation, useParams } from "react-router-dom";
import { memo, useCallback, useEffect, useState } from "react";
import { IoMdArrowBack, IoMdMenu, IoMdHome } from "react-icons/io";
import * as S from "./style";
import NarshaDiary from "../NarshaDiary";
import { NARSHA_PROJECTS } from "../../../constants/narsha";

interface SidebarProps {
  project: (typeof NARSHA_PROJECTS)[0] | null | undefined;
  onClose: () => void;
}

const Sidebar = memo(({ project, onClose }: SidebarProps) => (
  <S.SidebarHeader>
    <S.Nav>
      <S.HomeLink to="/narsha">
        <IoMdHome />
        프로젝트 목록
      </S.HomeLink>
      <S.Button onClick={onClose} aria-label="사이드바 접기">
        <IoMdArrowBack />
      </S.Button>
    </S.Nav>
    <S.SidebarTitle>{project?.title || "나르샤 활동 일지"}</S.SidebarTitle>
    <S.Period>{project?.period}</S.Period>
  </S.SidebarHeader>
));

Sidebar.displayName = "Sidebar";

const NarshaLayout = () => {
  const location = useLocation();
  const { projectId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isProjectListPage = location.pathname === "/narsha";
  const currentProject = projectId
    ? NARSHA_PROJECTS.find((p) => p.id === Number(projectId)) ?? null
    : null;

  const handleSidebarClose = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  const handleOverlayClick = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  useEffect(() => {
    if (isProjectListPage) {
      setIsSidebarOpen(false);
    }
  }, [isProjectListPage]);

  return (
    <S.Container>
      <S.HomeNav>
        <S.HomeLink to="/">
          <IoMdHome />
        </S.HomeLink>
      </S.HomeNav>

      {!isProjectListPage && (
        <>
          <S.Overlay isVisible={isSidebarOpen} onClick={handleOverlayClick} />

          <S.Sidebar isOpen={isSidebarOpen}>
            <Sidebar project={currentProject} onClose={handleSidebarClose} />
            <S.SidebarContent>
              {currentProject && (
                <NarshaDiary
                  entries={currentProject.entries}
                  projectId={currentProject.id}
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
              <S.MinimalHomeLink to="/narsha">
                <IoMdHome />
              </S.MinimalHomeLink>
            </S.MinimalNav>
          </S.MinimalSidebar>
        </>
      )}

      <S.Main isOpen={isSidebarOpen} isProjectListPage={isProjectListPage}>
        <S.ContentWrapper>
          <Outlet />
        </S.ContentWrapper>
      </S.Main>
    </S.Container>
  );
};

export default NarshaLayout;
