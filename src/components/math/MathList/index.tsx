import { useNavigate, useParams } from "react-router-dom";
import { BsBook, BsLightbulb } from "react-icons/bs";

import * as S from "./style";
import { ALL_MATH_TOPICS } from "../../../constants/math/topics";
import { MATH_CHAPTERS } from "../../../constants/math/chapters";

interface Props {
  onItemClick?: () => void;
}

const MathList = ({ onItemClick }: Props) => {
  const navigate = useNavigate();
  const { chapterId, topicId } = useParams();

  const chapter = MATH_CHAPTERS.find((chapter) => chapter.id === chapterId);
  const topics = ALL_MATH_TOPICS.filter((topic) => topic.chapter === chapterId);

  const handleTopicClick = (id: string) => {
    navigate(`/math/${chapter!.id}/${id}`);
    onItemClick?.();
  };

  return (
    <S.Container>
      {topics.map((topic) => (
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
            <S.DifficultyBadge difficulty={topic.difficulty}>
              {topic.difficulty}
            </S.DifficultyBadge>
          </S.CardHeader>

          <S.Title isActive={topic.id === topicId}>{topic.title}</S.Title>
          <S.Description>{topic.description}</S.Description>

          <S.CardFooter>
            {topic.prerequisites && topic.prerequisites.length > 0 && (
              <S.PrerequisiteBadge>
                <BsLightbulb />
                <span>선수지식 {topic.prerequisites.length}개</span>
              </S.PrerequisiteBadge>
            )}
            {topic.keywords && topic.keywords.length > 0 && (
              <S.KeywordList>
                {topic.keywords.slice(0, 2).map((keyword, index) => (
                  <S.Keyword key={index}>{keyword}</S.Keyword>
                ))}
                {topic.keywords.length > 2 && (
                  <S.Keyword>+{topic.keywords.length - 2}</S.Keyword>
                )}
              </S.KeywordList>
            )}
          </S.CardFooter>

          {topic.examples && topic.examples.length > 0 && (
            <S.ExampleCount>예제 {topic.examples.length}개</S.ExampleCount>
          )}
        </S.TopicCard>
      ))}
    </S.Container>
  );
};

export default MathList;
