import { MATH_CHAPTERS } from "../../../constants/math/chapters";
import SidebarLayout from "../../shared/SidebarLayout";

const MathLayout = () => {
  const menuItems = MATH_CHAPTERS.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    isCompleted: chapter.isCompleted,
    items: chapter.topics.map((topic) => ({
      id: topic.id,
      number: `${chapter.number}.${topic.section}`,
      title: topic.title,
    })),
  }));

  return (
    <SidebarLayout
      title="고등 수학 (상)"
      menuItems={menuItems}
      defaultPath="/math"
    />
  );
};

export default MathLayout;
