import SidebarLayout from "../../shared/SidebarLayout";
import { AI_CHAPTERS } from "../../../constants/ai";

const AILayout = () => {
  const menuItems = AI_CHAPTERS.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    isCompleted: chapter.isCompleted,
    items: chapter.topics.map((topic) => ({
      id: topic.id,
      number: `${chapter.number}.${topic.number}`,
      title: topic.title,
    })),
  }));

  return (
    <SidebarLayout
      title="AI 기초 학습"
      menuItems={menuItems}
      defaultPath="/ai"
    />
  );
};

export default AILayout;
