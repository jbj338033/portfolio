export interface AIPrerequiste {
  title: string;
  description: string;
  link?: string;
}

export interface AITopic {
  id: string;
  chapter: number;
  title: string;
  category: "기초" | "머신러닝" | "딥러닝";
  description: string;
  date: string;
  content: string;
  keywords?: string[];
  prerequisites?: AIPrerequiste[];
}

export interface AIChapter {
  id: string;
  title: string;
  isCompleted: boolean;
  topics: {
    id: string;
    number: string;
    title: string;
  }[];
}
