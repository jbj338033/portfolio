// NarshaLayout/index.tsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoArrowBack, IoChevronDown } from "react-icons/io5";
import { NARSHA_PROJECTS } from "../../../constants/narsha";
import * as S from "./style";

const NarshaLayout = () => {
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const toggleMenu = (id: number) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((menuId) => menuId !== id) : [...prev, id]
    );
  };

  return (
    <S.LayoutContainer>
      <S.Sidebar>
        <S.HomeLink to="/">
          <IoArrowBack />
          <span>메인으로</span>
        </S.HomeLink>

        <S.MenuWrapper>
          {NARSHA_PROJECTS.map((project) => (
            <S.MenuSection key={project.id}>
              <S.MenuTitle onClick={() => toggleMenu(project.id)}>
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
                      <S.MenuLink to={`/narsha/${project.id}/${entry.id}`}>
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
          ))}
        </S.MenuWrapper>
      </S.Sidebar>

      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.LayoutContainer>
  );
};

export default NarshaLayout;
