export interface NarshaContent {
  title: string;
  description: string[];
}

export interface NarshaEntry {
  id: number;
  week: number;
  title: string;
  date: string;
  teamMembers: string[];
  contents: NarshaContent[];
  achievement: string;
  nextPlan: string;
  summary?: string;
}

export interface NarshaProject {
  id: number;
  title: string;
  description: string;
  period: string;
  entries: NarshaEntry[];
}
