import { Algorithm } from "../types/algorithm";

export const SORT_ALGORITHMS: Algorithm[] = [
  {
    id: "insertion-sort",
    title: "삽입 정렬",
    category: "sort",
    type: "insertion",
    description: "",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
  },
  {
    id: "selection-sort",
    title: "선택 정렬",
    category: "sort",
    type: "selection",
    description: "",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
  },
];

export const GRAPH_ALGORITHMS: Algorithm[] = [
  {
    id: "kruskal",
    title: "크루스칼 알고리즘",
    category: "graph",
    type: "kruskal",
    description: "",
    timeComplexity: "O(E log E)",
    spaceComplexity: "O(V + E)",
  },
  {
    id: "prim",
    title: "프림 알고리즘",
    category: "graph",
    type: "prim",
    description: "",
    timeComplexity: "O(E log V)",
    spaceComplexity: "O(V)",
  },
];

export const ALL_ALGORITHMS = [...SORT_ALGORITHMS, ...GRAPH_ALGORITHMS];
