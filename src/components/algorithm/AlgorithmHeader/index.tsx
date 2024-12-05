// index.tsx
import * as S from "./style";
import { IoSearch } from "react-icons/io5";
import { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";
import {
  SORT_ALGORITHMS,
  GRAPH_ALGORITHMS,
} from "../../../constants/algorithm";

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

const AlgorithmHeader = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<Algorithm[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // 자모 분리 함수
  const decomposeHangul = (text: string) => {
    const result: string[] = [];

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const code = char.charCodeAt(0) - 0xac00;

      if (code > -1 && code < 11172) {
        const cho = CHOSUNG[Math.floor(code / 28 / 21)];
        const jung = JUNGSUNG[Math.floor(code / 28) % 21];
        const jong = JONGSUNG[code % 28];

        result.push(cho);
        if (jung) result.push(jung);
        if (jong) result.push(jong);
      } else {
        result.push(char);
      }
    }

    return result.join("");
  };

  // 초성 추출 함수
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

  // 검색 가능한 알고리즘 배열 생성
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

  // 검색 함수
  const search = useCallback(
    (query: string) => {
      const normalizedQuery = query.toLowerCase();
      const decomposedQuery = decomposeHangul(normalizedQuery);
      const chosungQuery = getChosung(normalizedQuery);

      return algorithms.filter((algo) => {
        // 일반 검색
        if (algo.title.toLowerCase().includes(normalizedQuery)) return true;
        // 자모 분리 검색
        if (algo.decomposed.includes(decomposedQuery)) return true;
        // 초성 검색
        if (algo.chosung.includes(chosungQuery)) return true;
        return false;
      });
    },
    [algorithms]
  );

  // 디바운스 적용된 검색
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

  // 검색어 변경 핸들러
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  // 알고리즘 선택 핸들러
  const handleAlgorithmSelect = (algo: Algorithm) => {
    navigate(`/algorithm/${algo.category}/${algo.id}`);
    setSearchTerm("");
    setSuggestions([]);
  };

  // 외부 클릭 감지
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
    <S.HeaderContainer>
      <S.Title>알고리즘 학습 노트</S.Title>
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
    </S.HeaderContainer>
  );
};

export default AlgorithmHeader;
