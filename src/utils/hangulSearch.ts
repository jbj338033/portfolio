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

// 한글 문자를 자모로 분리
const decomposeHangul = (text: string): string => {
  const result: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = char.charCodeAt(0);

    // 한글 유니코드 범위 체크 (가 ~ 힣)
    if (code >= 0xac00 && code <= 0xd7a3) {
      const normalized = code - 0xac00;

      // 초성, 중성, 종성 추출
      const cho = Math.floor(normalized / (21 * 28));
      const jung = Math.floor((normalized % (21 * 28)) / 28);
      const jong = normalized % 28;

      result.push(CHOSUNG[cho]);
      result.push(JUNGSUNG[jung]);
      if (jong > 0) {
        result.push(JONGSUNG[jong]);
      }
    } else {
      result.push(char);
    }
  }

  return result.join("");
};

// 초성만 추출
const getChosung = (text: string): string => {
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 0xac00 && code <= 0xd7a3) {
        const cho = Math.floor((code - 0xac00) / (21 * 28));
        return CHOSUNG[cho];
      }
      return char;
    })
    .join("");
};

interface SearchItem {
  title: string;
}

// 검색 함수
export const getHangulSearch = <T extends SearchItem>(
  query: string,
  items: T[]
): T[] => {
  const normalizedQuery = query.toLowerCase();
  const decomposedQuery = decomposeHangul(normalizedQuery);
  const chosungQuery = getChosung(normalizedQuery);

  // 아이템별로 검색용 문자열 생성 및 캐시
  const searchableItems = items.map((item) => ({
    ...item,
    searchStr: item.title.toLowerCase(),
    decomposed: decomposeHangul(item.title.toLowerCase()),
    chosung: getChosung(item.title),
  }));

  return searchableItems.filter((item) => {
    // 일반 검색
    if (item.searchStr.includes(normalizedQuery)) return true;
    // 자모 분리 검색
    if (item.decomposed.includes(decomposedQuery)) return true;
    // 초성 검색
    if (item.chosung.includes(chosungQuery)) return true;
    return false;
  });
};

export default getHangulSearch;
