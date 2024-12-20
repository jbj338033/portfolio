export interface AIPrerequiste {
  title: string;
  description: string;
  link?: string;
}

export interface AITopic {
  id: string;
  title: string;
  number: number;
  category: "기초" | "머신러닝" | "딥러닝" | "프로젝트";
  description: string;
  date: string;
  content: string;
  keywords?: string[];
  prerequisites?: AIPrerequiste[];
}

export interface AIChapter {
  id: string;
  number: number;
  title: string;
  isCompleted: boolean;
  topics: AITopic[];
}
