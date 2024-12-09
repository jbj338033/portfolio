import { IconType } from "react-icons";

export interface ActivityDetail {
  title: string;
  startDate: string;
  endDate?: string;
  description: string[];
  skills?: string[];
  achievements?: string[];
  projectLink?: string;
  role?: string;
  teamSize?: number;
}

export interface Activity {
  category: string;
  icon: IconType;
  details: ActivityDetail[];
}
