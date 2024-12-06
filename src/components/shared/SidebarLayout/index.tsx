import { useState, useRef, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  IoArrowBack,
  IoChevronDown,
  IoMenu,
  IoClose,
  IoSearch,
} from "react-icons/io5";
import * as S from "./style";

export interface MenuItem {
  id: string;
  title: string;
  isCompleted?: boolean;
  items: {
    id: string;
    number?: string;
    title: string;
  }[];
}

export interface SearchItem {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
}

interface Props {
  title: string;
  menuItems: MenuItem[];
  defaultPath: string;
  enableSearch?: boolean;
  searchPlaceholder?: string;
  searchItems?: SearchItem[];
  onSearch?: (term: string) => SearchItem[];
  onItemClick?: (menuId: string, itemId: string) => void;
}

const SidebarLayout = ({
  title,
  menuItems,
  defaultPath,
  enableSearch,
  searchPlaceholder = "검색...",
  onSearch,
  onItemClick,
}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts.length >= 3) {
      const currentSection = pathParts[2];
      if (!openMenus.includes(currentSection)) {
        setOpenMenus((prev) => [...prev, currentSection]);
      }
    }
  }, [location.pathname, openMenus]);

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

  const handleItemClick = (menuId: string, itemId: string) => {
    closeMobileMenu();
    onItemClick?.(menuId, itemId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    if (onSearch) {
      const results = onSearch(value);
      setSuggestions(results);
    }
  };

  const handleSearchItemSelect = (item: SearchItem) => {
    navigate(`${defaultPath}/${item.category}/${item.id}`);
    setSearchTerm("");
    setSuggestions([]);
    closeMobileMenu();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.LayoutContainer>
      <S.MobileHeader>
        <S.HomeLink to="/" className="mobile">
          <IoArrowBack />
          <span>메인으로</span>
        </S.HomeLink>

        <S.MobileTitle>{title}</S.MobileTitle>

        <S.MobileMenuToggle onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </S.MobileMenuToggle>
      </S.MobileHeader>

      <S.Sidebar isMobileMenuOpen={isMobileMenuOpen}>
        <S.TopSection>
          <S.HomeLink to="/" className="desktop">
            <IoArrowBack />
            <span>메인으로</span>
          </S.HomeLink>
        </S.TopSection>

        {enableSearch && (
          <S.SearchWrapper>
            <S.SearchContainer ref={searchRef}>
              <IoSearch />
              <S.SearchInput
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {suggestions.length > 0 && (
                <S.SuggestionList>
                  {suggestions.map((item) => (
                    <S.SuggestionItem
                      key={`${item.category}-${item.id}`}
                      onClick={() => handleSearchItemSelect(item)}
                    >
                      <S.SuggestionTitle>{item.title}</S.SuggestionTitle>
                      <S.SuggestionCategory>
                        {item.categoryLabel || item.category}
                      </S.SuggestionCategory>
                    </S.SuggestionItem>
                  ))}
                </S.SuggestionList>
              )}
            </S.SearchContainer>
          </S.SearchWrapper>
        )}

        <S.MenuWrapper onClick={(e) => e.stopPropagation()}>
          {menuItems.map((menu) => (
            <S.MenuSection key={menu.id}>
              <S.MenuTitle onClick={() => toggleMenu(menu.id)}>
                <S.MenuTitleText>{menu.title}</S.MenuTitleText>
                {menu.isCompleted !== undefined && (
                  <S.StatusBadge completed={menu.isCompleted}>
                    {menu.isCompleted ? "완료" : "진행중"}
                  </S.StatusBadge>
                )}
                <S.MenuChevron isOpen={openMenus.includes(menu.id)}>
                  <IoChevronDown />
                </S.MenuChevron>
              </S.MenuTitle>
              {openMenus.includes(menu.id) && (
                <S.MenuList>
                  {menu.items.map((item) => (
                    <S.MenuItem key={item.id}>
                      <S.MenuLink
                        to={`${defaultPath}/${menu.id}/${item.id}`}
                        onClick={() => handleItemClick(menu.id, item.id)}
                      >
                        {({ isActive }) => (
                          <>
                            {item.number && (
                              <S.ItemNumber isActive={isActive}>
                                {item.number}
                              </S.ItemNumber>
                            )}
                            <S.ItemTitle isActive={isActive}>
                              {item.title}
                            </S.ItemTitle>
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

export default SidebarLayout;
