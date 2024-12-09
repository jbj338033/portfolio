import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoArrowBack, IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { NARSHA_PROJECTS } from "../../../constants/narsha";
import * as S from "./style";

const NarshaLayout = () => {
  const [openMenus, setOpenMenus] = useState<number[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (id: number) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((menuId) => menuId !== id) : [...prev, id]
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const activeProject = NARSHA_PROJECTS.find((project) =>
    project.entries.some((entry) =>
      window.location.pathname.includes(`/narsha/${project.id}/${entry.id}`)
    )
  );

  const renderProjectMenu = (project: (typeof NARSHA_PROJECTS)[0]) => (
    <S.MenuSection key={project.id}>
      <S.MenuTitle
        onClick={(e) => {
          e.stopPropagation();
          toggleMenu(project.id);
        }}
      >
        <S.MenuTitleText>{project.title}</S.MenuTitleText>
        <S.StatusBadge status={project.status}>
          {project.status === "ongoing"
            ? "진행중"
            : project.status === "completed"
            ? "완료"
            : "계획중"}
        </S.StatusBadge>
        <S.MenuChevron isOpen={openMenus.includes(project.id)}>
          <IoChevronDown />
        </S.MenuChevron>
      </S.MenuTitle>
      {openMenus.includes(project.id) && (
        <S.MenuList>
          {project.entries.map((entry) => (
            <S.MenuItem key={entry.id}>
              <S.MenuLink
                to={`/narsha/${project.id}/${entry.id}`}
                onClick={closeMobileMenu}
              >
                {({ isActive }) => (
                  <>
                    <S.WeekBadge isActive={isActive}>
                      {entry.week}주차
                    </S.WeekBadge>
                    <S.EntryTitle isActive={isActive}>
                      {entry.title}
                    </S.EntryTitle>
                  </>
                )}
              </S.MenuLink>
            </S.MenuItem>
          ))}
        </S.MenuList>
      )}
    </S.MenuSection>
  );

  return (
    <S.LayoutContainer>
      {/* Mobile Header - Only visible on mobile */}
      <S.MobileHeader>
        <S.HomeLink to="/" className="mobile">
          <IoArrowBack />
          <span>메인으로</span>
        </S.HomeLink>

        <S.MobileTitle>
          {activeProject ? activeProject.title : "Narsha Projects"}
        </S.MobileTitle>

        <S.MobileMenuToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </S.MobileMenuToggle>
      </S.MobileHeader>

      {/* Sidebar - Contains navigation menu */}
      <S.Sidebar isMobileMenuOpen={isMobileMenuOpen}>
        <S.TopSection>
          <S.HomeLink to="/" className="desktop">
            <IoArrowBack />
            <span>메인으로</span>
          </S.HomeLink>
        </S.TopSection>

        <S.MenuWrapper onClick={(e) => e.stopPropagation()}>
          {NARSHA_PROJECTS.map(renderProjectMenu)}
        </S.MenuWrapper>
      </S.Sidebar>

      {/* Main Content Area */}
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.LayoutContainer>
  );
};

export default NarshaLayout;
