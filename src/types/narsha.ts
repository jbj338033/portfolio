export interface NarshaEntry {
  id: number;
  week: number;
  date: string;
  title: string;
  teamMembers: string[];
  contents: {
    title: string;
    description: string[];
  }[];
  achievement: string;
  nextPlan: string;
  summary?: string;
  tags?: string[];
}

export interface NarshaProject {
  id: number;
  title: string;
  description: string;
  period: string;
  thumbnail?: string;
  status: "ongoing" | "completed";
  techStack: string[];
  teamSize: number;
  entries: NarshaEntry[];
}

export type ViewMode = "list" | "grid" | "timeline";
