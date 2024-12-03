export interface TimeComplexity {
  access?: string;
  search?: string;
  insertion?: string;
  deletion?: string;
  push?: string;
  pop?: string;
  peek?: string;
  [key: string]: string | undefined;
}

export interface Topic {
  id: number;
  title: string;
  content: string;
  code?: string;
  timeComplexity?: TimeComplexity;
}

export interface DataStructure {
  id: number;
  title: string;
  category: "선형 자료구조" | "비선형 자료구조" | "추상 자료구조";
  topics: Topic[];
}

export type DataStructures = readonly DataStructure[];
