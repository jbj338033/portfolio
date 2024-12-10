import { useRef, useEffect, useCallback, memo, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  IoArrowBack,
  IoChevronDown,
  IoMenu,
  IoClose,
  IoSearch,
} from "react-icons/io5";
import debounce from "lodash/debounce";
import { Virtuoso } from "react-virtuoso";
import { useSidebarStore, SearchItem } from "../../../stores/sidebar";
import * as S from "./style";

// Types
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

// Memoized Components
const HomeLink = memo(({ isMobile }: { isMobile: boolean }) => (
  <S.HomeLink to="/" className={isMobile ? "mobile" : "desktop"}>
    <IoArrowBack />
    <span>메인으로</span>
  </S.HomeLink>
));

HomeLink.displayName = "HomeLink";

const MenuItem = memo(
  ({
    item,
    defaultPath,
    menuId,
    onClick,
  }: {
    item: { id: string; number?: string; title: string };
    defaultPath: string;
    menuId: string;
    onClick: (menuId: string, itemId: string) => void;
  }) => (
    <S.MenuItem>
      <S.MenuLink
        to={`${defaultPath}/${menuId}/${item.id}`}
        onClick={() => onClick(menuId, item.id)}
      >
        {({ isActive }) => (
          <>
            {item.number && (
              <S.ItemNumber isActive={isActive}>{item.number}</S.ItemNumber>
            )}
            <S.ItemTitle isActive={isActive}>{item.title}</S.ItemTitle>
          </>
        )}
      </S.MenuLink>
    </S.MenuItem>
  )
);

MenuItem.displayName = "MenuItem";

const MenuSection = memo(
  ({
    menu,
    isOpen,
    defaultPath,
    onItemClick,
  }: {
    menu: MenuItem;
    isOpen: boolean;
    defaultPath: string;
    onItemClick: (menuId: string, itemId: string) => void;
  }) => {
    const store = useSidebarStore();

    return (
      <S.MenuSection>
        <S.MenuTitle onClick={() => store.toggleMenu(menu.id)}>
          <S.MenuTitleText>{menu.title}</S.MenuTitleText>
          {menu.isCompleted !== undefined && (
            <S.StatusBadge completed={menu.isCompleted}>
              {menu.isCompleted ? "완료" : "진행중"}
            </S.StatusBadge>
          )}
          <S.MenuChevron isOpen={isOpen}>
            <IoChevronDown />
          </S.MenuChevron>
        </S.MenuTitle>
        {isOpen && (
          <S.MenuList>
            {menu.items.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                defaultPath={defaultPath}
                menuId={menu.id}
                onClick={onItemClick}
              />
            ))}
          </S.MenuList>
        )}
      </S.MenuSection>
    );
  }
);

MenuSection.displayName = "MenuSection";

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
  const searchRef = useRef<HTMLDivElement>(null);
  const store = useSidebarStore();

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts.length >= 3) {
      const currentSection = pathParts[2];
      if (!store.openMenus.includes(currentSection)) {
        store.setOpenMenus([...store.openMenus, currentSection]);
      }
    }
  }, [location.pathname, store]);

  const debouncedSearchFn = useMemo(
    () =>
      debounce((value: string) => {
        if (!value) {
          store.setSuggestions([]);
          return;
        }
        if (onSearch) {
          const results = onSearch(value);
          store.setSuggestions(results);
        }
      }, 300),
    [store, onSearch]
  );

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      store.setSearchTerm(value);
      debouncedSearchFn(value);
    },
    [store, debouncedSearchFn]
  );

  const handleSearchItemSelect = useCallback(
    (item: SearchItem) => {
      navigate(`${defaultPath}/${item.category}/${item.id}`);
      store.clearSearch();
      store.setMobileMenuOpen(false);
    },
    [navigate, defaultPath, store]
  );

  const handleItemClick = useCallback(
    (menuId: string, itemId: string) => {
      store.setMobileMenuOpen(false);
      onItemClick?.(menuId, itemId);
    },
    [store, onItemClick]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        store.setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [store]);

  return (
    <S.LayoutContainer>
      <S.MobileHeader>
        <HomeLink isMobile={true} />
        <S.MobileTitle>{title}</S.MobileTitle>
        <S.MobileMenuToggle
          onClick={() => store.setMobileMenuOpen(!store.isMobileMenuOpen)}
        >
          {store.isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </S.MobileMenuToggle>
      </S.MobileHeader>

      <S.Sidebar isMobileMenuOpen={store.isMobileMenuOpen}>
        <S.TopSection>
          <HomeLink isMobile={false} />
        </S.TopSection>

        {enableSearch && (
          <S.SearchWrapper>
            <S.SearchContainer ref={searchRef}>
              <IoSearch />
              <S.SearchInput
                placeholder={searchPlaceholder}
                value={store.searchTerm}
                onChange={handleSearchChange}
              />
              {store.suggestions.length > 0 && (
                <S.SuggestionList>
                  <Virtuoso
                    style={{ height: "200px" }}
                    totalCount={store.suggestions.length}
                    itemContent={(index) => (
                      <S.SuggestionItem
                        onClick={() =>
                          handleSearchItemSelect(store.suggestions[index])
                        }
                      >
                        <S.SuggestionTitle>
                          {store.suggestions[index].title}
                        </S.SuggestionTitle>
                        <S.SuggestionCategory>
                          {store.suggestions[index].categoryLabel ||
                            store.suggestions[index].category}
                        </S.SuggestionCategory>
                      </S.SuggestionItem>
                    )}
                  />
                </S.SuggestionList>
              )}
            </S.SearchContainer>
          </S.SearchWrapper>
        )}

        <S.MenuWrapper onClick={(e) => e.stopPropagation()}>
          <Virtuoso
            style={{ height: "calc(100vh - 200px)" }}
            totalCount={menuItems.length}
            itemContent={(index) => (
              <MenuSection
                key={menuItems[index].id}
                menu={menuItems[index]}
                isOpen={store.openMenus.includes(menuItems[index].id)}
                defaultPath={defaultPath}
                onItemClick={handleItemClick}
              />
            )}
          />
        </S.MenuWrapper>
      </S.Sidebar>

      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.LayoutContainer>
  );
};

export default memo(SidebarLayout);
