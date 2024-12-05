interface TechItem {
  name: string;
  color: string;
  level: number;
  experience: string;
  description: string[];
}

export interface TechCategory {
  icon: JSX.Element;
  items: TechItem[];
}
