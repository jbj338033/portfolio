import { useNavigate, useParams } from "react-router-dom";
import { BsBook, BsCalendar } from "react-icons/bs";
import { memo, useCallback, useMemo } from "react";
import { AIPrerequiste, AITopic } from "../../../types/ai";
import * as S from "./style";
import { AI_CHAPTERS } from "../../../constants/ai";

interface Props {
  viewMode?: "list" | "grid";
  onItemClick?: () => void;
}

interface TopicCardProps {
  topic: AITopic;
  isActive: boolean;
  onClick: () => void;
}

const TopicCardHeader = memo(
  ({ category, number }: { category: string; number: string }) => (
    <S.CardHeader>
      <S.CategoryBadge>
        <BsBook aria-hidden="true" />
        {category}
      </S.CategoryBadge>
      <S.ChapterBadge>{number}</S.ChapterBadge>
    </S.CardHeader>
  )
);

TopicCardHeader.displayName = "TopicCardHeader";

const TopicCardFooter = memo(
  ({
    prerequisites,
    date,
  }: {
    prerequisites?: AIPrerequiste[];
    date: string;
  }) => (
    <S.CardFooter>
      {prerequisites && prerequisites.length > 0 && (
        <S.PrerequisiteBadge>
          선수지식 {prerequisites.length}개
        </S.PrerequisiteBadge>
      )}
      <S.TopicDate>
        <BsCalendar aria-hidden="true" />
        {date}
      </S.TopicDate>
    </S.CardFooter>
  )
);

TopicCardFooter.displayName = "TopicCardFooter";

const TopicCard = memo(({ topic, isActive, onClick }: TopicCardProps) => (
  <S.TopicCard onClick={onClick} isActive={isActive}>
    <TopicCardHeader
      category={topic.category}
      number={topic.number.toString()}
    />
    <S.Title isActive={isActive}>{topic.title}</S.Title>
    <S.Description>{topic.description}</S.Description>
    <TopicCardFooter prerequisites={topic.prerequisites} date={topic.date} />
  </S.TopicCard>
));

TopicCard.displayName = "TopicCard";

const ListViewItem = memo(({ topic, isActive, onClick }: TopicCardProps) => (
  <S.ListItem onClick={onClick} isActive={isActive}>
    <S.ListCategory isActive={isActive}>
      <BsBook aria-hidden="true" />
      {topic.category}
    </S.ListCategory>
    <S.ListTitle isActive={isActive}>{topic.title}</S.ListTitle>
    <S.ListChapter isActive={isActive}>{topic.number}장</S.ListChapter>
  </S.ListItem>
));

ListViewItem.displayName = "ListViewItem";

const AIList = ({ viewMode = "grid", onItemClick }: Props) => {
  const navigate = useNavigate();
  const { chapterId, topicId } = useParams();

  const topics = useMemo(() => {
    const chapter = AI_CHAPTERS.find((chapter) => chapter.id === chapterId);
    return chapter?.topics || [];
  }, [chapterId]);

  const handleTopicClick = useCallback(
    (id: string) => {
      if (!chapterId) return;
      navigate(`/ai/${chapterId}/${id}`);
      onItemClick?.();
    },
    [chapterId, navigate, onItemClick]
  );

  const renderTopic = useCallback(
    (topic: AITopic) => {
      const isActive = topic.id === topicId;
      return viewMode === "grid" ? (
        <TopicCard
          key={topic.id}
          topic={topic}
          isActive={isActive}
          onClick={() => handleTopicClick(topic.id)}
        />
      ) : (
        <ListViewItem
          key={topic.id}
          topic={topic}
          isActive={isActive}
          onClick={() => handleTopicClick(topic.id)}
        />
      );
    },
    [viewMode, topicId, handleTopicClick]
  );

  return (
    <S.Container viewMode={viewMode}>{topics.map(renderTopic)}</S.Container>
  );
};

export default memo(AIList);
