import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoArrowBack, IoChevronDown, IoMenu, IoClose } from "react-icons/io5";
import { AI_CHAPTERS } from "../../../constants/ai";
import * as S from "./style";

const AILayout = () => {
  const [openMenus, setOpenMenus] = useState<string[]>(["basics", "ml", "dl"]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (id: string) => {
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

  return (
    <S.LayoutContainer>
      {/* Mobile Header */}
      <S.MobileHeader>
        <S.HomeLink to="/" className="mobile">
          <IoArrowBack />
          <span>메인으로</span>
        </S.HomeLink>

        <S.MobileTitle>AI 기초 학습</S.MobileTitle>

        <S.MobileMenuToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </S.MobileMenuToggle>
      </S.MobileHeader>

      {/* Sidebar */}
      <S.Sidebar isMobileMenuOpen={isMobileMenuOpen}>
        <S.TopSection>
          <S.HomeLink to="/" className="desktop">
            <IoArrowBack />
            <span>메인으로</span>
          </S.HomeLink>
        </S.TopSection>

        <S.MenuWrapper onClick={(e) => e.stopPropagation()}>
          {AI_CHAPTERS.map((chapter) => (
            <S.MenuSection key={chapter.id}>
              <S.MenuTitle onClick={() => toggleMenu(chapter.id)}>
                <S.MenuTitleText>{chapter.title}</S.MenuTitleText>
                <S.StatusBadge completed={chapter.isCompleted}>
                  {chapter.isCompleted ? "학습완료" : "학습중"}
                </S.StatusBadge>
                <S.MenuChevron isOpen={openMenus.includes(chapter.id)}>
                  <IoChevronDown />
                </S.MenuChevron>
              </S.MenuTitle>
              {openMenus.includes(chapter.id) && (
                <S.MenuList>
                  {chapter.topics.map((topic) => (
                    <S.MenuItem key={topic.id}>
                      <S.MenuLink
                        to={`/ai/${chapter.id}/${topic.id}`}
                        onClick={closeMobileMenu}
                      >
                        {({ isActive }) => (
                          <>
                            <S.TopicNumber isActive={isActive}>
                              {topic.number}
                            </S.TopicNumber>
                            <S.TopicTitle isActive={isActive}>
                              {topic.title}
                            </S.TopicTitle>
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

      {/* Main Content */}
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.LayoutContainer>
  );
};

export default AILayout;
