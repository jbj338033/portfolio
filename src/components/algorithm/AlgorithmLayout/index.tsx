import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  IoArrowBack,
  IoChevronDown,
  IoSearch,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import {
  SORT_ALGORITHMS,
  GRAPH_ALGORITHMS,
} from "../../../constants/algorithm";
import debounce from "lodash/debounce";
import * as S from "./style";

interface Algorithm {
  id: string;
  title: string;
  category: string;
}

const CHOSUNG = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const JUNGSUNG = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];
const JONGSUNG = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const AlgorithmLayout = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState(["sort", "graph"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Algorithm[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) =>
      prev.includes(menu) ? prev.filter((m) => m !== menu) : [...prev, menu]
    );
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 한글 자모 분리 함수
  const decomposeHangul = (text: string) => {
    const result: string[] = [];
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const code = char.charCodeAt(0) - 0xac00;
      if (code > -1 && code < 11172) {
        result.push(CHOSUNG[Math.floor(code / 28 / 21)]);
        result.push(JUNGSUNG[Math.floor(code / 28) % 21]);
        const jong = JONGSUNG[code % 28];
        if (jong) result.push(jong);
      } else {
        result.push(char);
      }
    }
    return result.join("");
  };

  const getChosung = (text: string) => {
    return text
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0) - 0xac00;
        if (code > -1 && code < 11172) {
          return CHOSUNG[Math.floor(code / 28 / 21)];
        }
        return char;
      })
      .join("");
  };

  const algorithms = useMemo(() => {
    const allAlgorithms = [
      ...SORT_ALGORITHMS.map((algo) => ({ ...algo, category: "sort" })),
      ...GRAPH_ALGORITHMS.map((algo) => ({ ...algo, category: "graph" })),
    ];

    return allAlgorithms.map((algo) => ({
      ...algo,
      decomposed: decomposeHangul(algo.title.toLowerCase()),
      chosung: getChosung(algo.title),
    }));
  }, []);

  const search = useCallback(
    (query: string) => {
      const normalizedQuery = query.toLowerCase();
      const decomposedQuery = decomposeHangul(normalizedQuery);
      const chosungQuery = getChosung(normalizedQuery);

      return algorithms.filter((algo) => {
        if (algo.title.toLowerCase().includes(normalizedQuery)) return true;
        if (algo.decomposed.includes(decomposedQuery)) return true;
        if (algo.chosung.includes(chosungQuery)) return true;
        return false;
      });
    },
    [algorithms]
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((term: string) => {
        if (!term) {
          setSuggestions([]);
          return;
        }
        const results = search(term);
        setSuggestions(results);
      }, 150),
    [search]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  const handleAlgorithmSelect = (algo: Algorithm) => {
    navigate(`/algorithm/${algo.category}/${algo.id}`);
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
      {/* Mobile Header */}
      <S.MobileHeader>
        <S.HomeLink to="/" className="mobile">
          <IoArrowBack />
          <span>메인으로</span>
        </S.HomeLink>

        <S.MobileTitle>알고리즘 학습 노트</S.MobileTitle>

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

        <S.SearchWrapper>
          <S.SearchContainer ref={searchRef}>
            <IoSearch />
            <S.SearchInput
              placeholder="알고리즘 검색..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {suggestions.length > 0 && (
              <S.SuggestionList>
                {suggestions.map((algo) => (
                  <S.SuggestionItem
                    key={`${algo.category}-${algo.id}`}
                    onClick={() => handleAlgorithmSelect(algo)}
                  >
                    <S.AlgorithmTitle>{algo.title}</S.AlgorithmTitle>
                    <S.AlgorithmCategory>
                      {algo.category === "sort" ? "정렬" : "그래프"}
                    </S.AlgorithmCategory>
                  </S.SuggestionItem>
                ))}
              </S.SuggestionList>
            )}
          </S.SearchContainer>
        </S.SearchWrapper>

        <S.MenuWrapper>
          <S.MenuSection>
            <S.MenuTitle onClick={() => toggleMenu("sort")}>
              <span>정렬 알고리즘</span>
              <S.MenuChevron isOpen={openMenus.includes("sort")}>
                <IoChevronDown />
              </S.MenuChevron>
            </S.MenuTitle>
            {openMenus.includes("sort") && (
              <S.MenuList>
                {SORT_ALGORITHMS.map((algo) => (
                  <S.MenuItem key={algo.id}>
                    <S.MenuLink
                      to={`/algorithm/sort/${algo.id}`}
                      onClick={closeMobileMenu}
                    >
                      {algo.title}
                    </S.MenuLink>
                  </S.MenuItem>
                ))}
              </S.MenuList>
            )}
          </S.MenuSection>

          <S.MenuSection>
            <S.MenuTitle onClick={() => toggleMenu("graph")}>
              <span>그래프 알고리즘</span>
              <S.MenuChevron isOpen={openMenus.includes("graph")}>
                <IoChevronDown />
              </S.MenuChevron>
            </S.MenuTitle>
            {openMenus.includes("graph") && (
              <S.MenuList>
                {GRAPH_ALGORITHMS.map((algo) => (
                  <S.MenuItem key={algo.id}>
                    <S.MenuLink
                      to={`/algorithm/graph/${algo.id}`}
                      onClick={closeMobileMenu}
                    >
                      {algo.title}
                    </S.MenuLink>
                  </S.MenuItem>
                ))}
              </S.MenuList>
            )}
          </S.MenuSection>
        </S.MenuWrapper>
      </S.Sidebar>

      {/* Main Content */}
      <S.MainContainer>
        <Outlet />
      </S.MainContainer>
    </S.LayoutContainer>
  );
};

export default AlgorithmLayout;
