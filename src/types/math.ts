export interface MathPrerequisite {
  title: string;
  description: string;
  link?: string;
}

export interface MathExample {
  id: string;
  title: string;
  problem: string;
  solution: string;
  explanation?: string;
  hint?: string;
}

export interface MathFormula {
  id: string;
  title: string;
  formula: string;
  description: string;
}

export interface MathTopic {
  id: string;
  chapter: string;
  section: number;
  title: string;
  category:
    | "다항식"
    | "방정식과 부등식"
    | "도형의 방정식"
    | "집합과 명제"
    | "함수"
    | "경우의 수";
  description: string;
  date: string;
  content: string;
  keywords?: string[];
  prerequisites?: MathPrerequisite[];
  examples?: MathExample[];
  formulas?: MathFormula[];
  difficulty: "기본" | "중급" | "발전" | "심화";
}

export interface MathChapter {
  id: string;
  title: string;
  isCompleted: boolean;
  sections: {
    id: string;
    number: string;
    title: string;
  }[];
}
