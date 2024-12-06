import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BsBook, BsCalendar, BsLightbulb } from "react-icons/bs";
import * as S from "./style";
import { AI_CHAPTERS } from "../../../constants/ai";

const AIDetail = () => {
  const { chapterId, topicId } = useParams();
  const topic = AI_CHAPTERS.find(
    (chapter) => chapter.id === chapterId
  )?.topics.find((topic) => topic.id === topicId);

  if (!topic) return null;

  return (
    <S.Container>
      <S.Header>
        <S.HeaderMeta>
          <S.CategoryBadge>
            <BsBook />
            {topic.category}
          </S.CategoryBadge>
          <S.Date>
            <BsCalendar />
            {topic.date}
          </S.Date>
        </S.HeaderMeta>

        <S.Title>{topic.title}</S.Title>

        {topic.keywords && topic.keywords.length > 0 && (
          <S.Keywords>
            {topic.keywords.map((keyword, index) => (
              <S.Keyword key={index}>{keyword}</S.Keyword>
            ))}
          </S.Keywords>
        )}
      </S.Header>

      <S.Content>
        <ReactMarkdown>{topic.content}</ReactMarkdown>
      </S.Content>

      {topic.prerequisites && topic.prerequisites.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <BsLightbulb />
            <span>선수지식</span>
          </S.SectionTitle>
          <S.PrerequisiteList>
            {topic.prerequisites.map((prerequisite, index) => (
              <S.PrerequisiteItem key={index}>
                <S.PrerequisiteTitle>{prerequisite.title}</S.PrerequisiteTitle>
                <S.PrerequisiteDescription>
                  {prerequisite.description}
                </S.PrerequisiteDescription>
              </S.PrerequisiteItem>
            ))}
          </S.PrerequisiteList>
        </S.Section>
      )}
    </S.Container>
  );
};

export default AIDetail;
