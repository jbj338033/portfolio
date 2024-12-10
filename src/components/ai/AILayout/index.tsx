import { memo, useMemo } from "react";
import SidebarLayout from "../../shared/SidebarLayout";
import { AI_CHAPTERS } from "../../../constants/ai";
import { AIChapter } from "../../../types/ai";

const AILayout = () => {
  const menuItems = useMemo(
    () =>
      AI_CHAPTERS.map((chapter: AIChapter) => ({
        id: chapter.id,
        title: chapter.title,
        isCompleted: chapter.isCompleted,
        items: chapter.topics.map((topic) => ({
          id: topic.id,
          number: `${chapter.number}.${topic.number}`,
          title: topic.title,
        })),
      })),
    []
  );

  return (
    <SidebarLayout
      title="AI 기초 학습"
      menuItems={menuItems}
      defaultPath="/ai"
    />
  );
};

export default memo(AILayout);
