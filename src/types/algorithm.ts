export type AlgorithmCategory = "sort" | "graph";

export type SortAlgorithmType =
  | "insertion"
  | "selection"
  | "bubble"
  | "heap1"
  | "heap2"
  | "quick"
  | "merge"
  | "shell"
  | "radix";

export type GraphAlgorithmType =
  | "kruskal"
  | "prim"
  | "dijkstra"
  | "floyd"
  | "dfs"
  | "bfs";

export interface Algorithm {
  id: string;
  title: string;
  category: AlgorithmCategory;
  type: SortAlgorithmType | GraphAlgorithmType;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  pseudoCode?: string;
  pythonCode?: string;
  explanation?: string;
  visualExample?: string;
}
