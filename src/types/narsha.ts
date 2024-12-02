export interface NarshaEntry {
  id: number;
  week: number;
  date: string;
  title: string;
  summary: string;
  teamMembers: string[];
  contents: {
    title: string;
    description: string[];
  }[];
  achievement: string;
  nextPlan: string;
  images?: string[];
}
