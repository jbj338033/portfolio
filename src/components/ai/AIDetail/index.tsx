import { memo, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BsBook, BsCalendar, BsLightbulb } from "react-icons/bs";
import * as S from "./style";
import { AI_CHAPTERS } from "../../../constants/ai";
import { AIPrerequiste, AITopic } from "../../../types/ai";

const HeaderMeta = memo(
  ({ category, date }: { category: string; date: string }) => (
    <S.HeaderMeta>
      <S.CategoryBadge>
        <BsBook aria-hidden="true" />
        {category}
      </S.CategoryBadge>
      <S.Date>
        <BsCalendar aria-hidden="true" />
        {date}
      </S.Date>
    </S.HeaderMeta>
  )
);

HeaderMeta.displayName = "HeaderMeta";

const Keywords = memo(({ keywords }: { keywords: string[] }) => (
  <S.Keywords>
    {keywords.map((keyword) => (
      <S.Keyword key={keyword}>{keyword}</S.Keyword>
    ))}
  </S.Keywords>
));

Keywords.displayName = "Keywords";

const PrerequisiteList = memo(
  ({ prerequisites }: { prerequisites: AIPrerequiste[] }) => (
    <S.PrerequisiteList>
      {prerequisites.map((prerequisite) => (
        <S.PrerequisiteItem key={prerequisite.title}>
          <S.PrerequisiteTitle>{prerequisite.title}</S.PrerequisiteTitle>
          <S.PrerequisiteDescription>
            {prerequisite.description}
          </S.PrerequisiteDescription>
        </S.PrerequisiteItem>
      ))}
    </S.PrerequisiteList>
  )
);

PrerequisiteList.displayName = "PrerequisiteList";

const MarkdownContent = memo(({ content }: { content: string }) => (
  <ReactMarkdown>{content}</ReactMarkdown>
));

MarkdownContent.displayName = "MarkdownContent";

const AIDetail = () => {
  const { chapterId, topicId } = useParams<{
    chapterId: string;
    topicId: string;
  }>();

  const topic = useMemo(() => {
    const chapter = AI_CHAPTERS.find((chapter) => chapter.id === chapterId);
    return chapter?.topics.find((topic) => topic.id === topicId);
  }, [chapterId, topicId]);

  const renderContent = useCallback(
    (topic: AITopic) => (
      <S.Container>
        <S.Header>
          <HeaderMeta category={topic.category} date={topic.date} />
          <S.Title>{topic.title}</S.Title>
          {topic.keywords?.length && <Keywords keywords={topic.keywords} />}
        </S.Header>

        <S.Content>
          <MarkdownContent content={topic.content} />
        </S.Content>

        {topic.prerequisites && topic.prerequisites?.length > 0 && (
          <S.Section>
            <S.SectionTitle>
              <BsLightbulb aria-hidden="true" />
              <span>선수지식</span>
            </S.SectionTitle>
            <PrerequisiteList prerequisites={topic.prerequisites} />
          </S.Section>
        )}
      </S.Container>
    ),
    []
  );

  if (!topic) return null;

  return renderContent(topic);
};

export default memo(AIDetail);
