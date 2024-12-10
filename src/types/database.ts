export interface DatabaseEntry {
  id: number;
  week: number;
  date: string;
  topic: string;
  title: string;
  content: string;
  codeExamples: Array<{
    language: string;
    code: string;
    description?: string;
  }>;
  summary: string;
  keywords: string[];
  assignments?: {
    title: string;
    description: string;
    dueDate: string;
  }[];
  resources?: {
    title: string;
    url: string;
    type: "article" | "video" | "documentation";
  }[];
}
