import { useNavigate, useParams } from "react-router-dom";
import { BsBook, BsCalendar } from "react-icons/bs";
import { AITopic } from "../../../types/ai";
import * as S from "./style";
import { AI_CHAPTERS } from "../../../constants/ai";

interface Props {
  viewMode?: "list" | "grid";
  onItemClick?: () => void;
}

const AIList = ({ viewMode = "grid", onItemClick }: Props) => {
  const navigate = useNavigate();
  const { chapterId, topicId } = useParams();

  const chapter = AI_CHAPTERS.find((chapter) => chapter.id === chapterId);
  const topics = chapter?.topics || [];

  const handleTopicClick = (id: string) => {
    navigate(`/ai/${chapter!.id}/${id}`);
    onItemClick?.();
  };

  const renderGridView = (topic: AITopic) => (
    <S.TopicCard
      key={topic.id}
      onClick={() => handleTopicClick(topic.id)}
      isActive={topic.id === topicId}
    >
      <S.CardHeader>
        <S.CategoryBadge>
          <BsBook />
          {topic.category}
        </S.CategoryBadge>
        <S.ChapterBadge>{topic.number}장</S.ChapterBadge>
      </S.CardHeader>

      <S.Title isActive={topic.id === topicId}>{topic.title}</S.Title>
      <S.Description>{topic.description}</S.Description>

      <S.CardFooter>
        {topic.prerequisites && topic.prerequisites.length > 0 && (
          <S.PrerequisiteBadge>
            선수지식 {topic.prerequisites.length}개
          </S.PrerequisiteBadge>
        )}
        <S.TopicDate>
          <BsCalendar />
          {topic.date}
        </S.TopicDate>
      </S.CardFooter>
    </S.TopicCard>
  );

  const renderListView = (topic: AITopic) => (
    <S.ListItem
      key={topic.id}
      onClick={() => handleTopicClick(topic.id)}
      isActive={topic.id === topicId}
    >
      <S.ListCategory isActive={topic.id === topicId}>
        <BsBook />
        {topic.category}
      </S.ListCategory>
      <S.ListTitle isActive={topic.id === topicId}>{topic.title}</S.ListTitle>
      <S.ListChapter isActive={topic.id === topicId}>
        {topic.number}장
      </S.ListChapter>
    </S.ListItem>
  );

  return (
    <S.Container viewMode={viewMode}>
      {topics.map((topic) =>
        viewMode === "grid" ? renderGridView(topic) : renderListView(topic)
      )}
    </S.Container>
  );
};

export default AIList;
