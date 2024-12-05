import * as S from "./style";
import { IoChevronDown, IoArrowBack } from "react-icons/io5";
import {
  SORT_ALGORITHMS,
  GRAPH_ALGORITHMS,
} from "../../../constants/algorithm";
import { useState } from "react";

const AlgorithmSidebar = () => {
  const [openMenus, setOpenMenus] = useState(["sort", "graph"]);

  const toggleMenu = (menu: "sort" | "graph") => {
    setOpenMenus((prev) =>
      prev.includes(menu) ? prev.filter((m) => m !== menu) : [...prev, menu]
    );
  };

  return (
    <S.Container>
      <S.HomeLink to="/">
        <IoArrowBack />
        <span>메인으로</span>
      </S.HomeLink>

      <S.MenuWrapper>
        <S.MenuSection>
          <S.MenuTitle onClick={() => toggleMenu("sort")}>
            <span>정렬 알고리즘</span>
            <IoChevronDown
              style={{
                transform: openMenus.includes("sort")
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          </S.MenuTitle>
          {openMenus.includes("sort") && (
            <S.MenuList>
              {SORT_ALGORITHMS.map((algo) => (
                <S.MenuItem key={algo.id}>
                  <S.MenuLink to={`/algorithm/sort/${algo.id}`}>
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
            <IoChevronDown
              style={{
                transform: openMenus.includes("graph")
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}
            />
          </S.MenuTitle>
          {openMenus.includes("graph") && (
            <S.MenuList>
              {GRAPH_ALGORITHMS.map((algo) => (
                <S.MenuItem key={algo.id}>
                  <S.MenuLink to={`/algorithm/graph/${algo.id}`}>
                    {algo.title}
                  </S.MenuLink>
                </S.MenuItem>
              ))}
            </S.MenuList>
          )}
        </S.MenuSection>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default AlgorithmSidebar;
