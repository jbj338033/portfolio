import SidebarLayout, {
  MenuItem,
  SearchItem,
} from "../../shared/SidebarLayout";
import {
  SORT_ALGORITHMS,
  GRAPH_ALGORITHMS,
} from "../../../constants/algorithm";
import { getHangulSearch } from "../../../utils/hangulSearch";

const menuItems: MenuItem[] = [
  {
    id: "sort",
    title: "정렬 알고리즘",
    items: SORT_ALGORITHMS.map((algo) => ({
      id: algo.id,
      title: algo.title,
    })),
  },
  {
    id: "graph",
    title: "그래프 알고리즘",
    items: GRAPH_ALGORITHMS.map((algo) => ({
      id: algo.id,
      title: algo.title,
    })),
  },
];

const searchItems: SearchItem[] = [
  ...SORT_ALGORITHMS.map((algo) => ({
    id: algo.id,
    title: algo.title,
    category: "sort",
    categoryLabel: "정렬",
  })),
  ...GRAPH_ALGORITHMS.map((algo) => ({
    id: algo.id,
    title: algo.title,
    category: "graph",
    categoryLabel: "그래프",
  })),
];

const AlgorithmLayout = () => {
  const handleSearch = (term: string) => {
    return getHangulSearch(term, searchItems);
  };

  return (
    <SidebarLayout
      title="알고리즘 학습 노트"
      menuItems={menuItems}
      defaultPath="/algorithm"
      enableSearch
      searchPlaceholder="알고리즘 검색..."
      onSearch={handleSearch}
    />
  );
};

export default AlgorithmLayout;
