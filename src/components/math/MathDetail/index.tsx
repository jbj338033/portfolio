import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BsBook, BsLightbulb, BsPencilSquare } from "react-icons/bs";
import { ALL_MATH_TOPICS } from "../../../constants/math/topics";
import KatexBlock from "../../shared/KatexBlock";
import * as S from "./style";

const MathDetail = () => {
  const { topicId } = useParams();
  const topic = ALL_MATH_TOPICS.find((t) => t.id === topicId);

  if (!topic) return null;

  const renderMathContent = (text: string) => {
    if (text.startsWith("$") && text.endsWith("$")) {
      return <KatexBlock math={text.slice(1, -1)} />;
    }
    return text;
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderMeta>
          <S.CategoryBadge>
            <BsBook />
            {topic.category}
          </S.CategoryBadge>
          <S.DifficultyBadge difficulty={topic.difficulty}>
            {topic.difficulty}
          </S.DifficultyBadge>
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

      {topic.examples && topic.examples.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <BsPencilSquare />
            <span>예제 문제</span>
          </S.SectionTitle>
          <S.ExampleList>
            {topic.examples.map((example) => (
              <S.ExampleItem key={example.id}>
                <S.ExampleHeader>
                  <S.ExampleTitle>{example.title}</S.ExampleTitle>
                </S.ExampleHeader>
                <S.Problem>{renderMathContent(example.problem)}</S.Problem>
                <S.Solution>
                  <S.SolutionTitle>풀이</S.SolutionTitle>
                  {renderMathContent(example.solution)}
                  {example.explanation && (
                    <S.Explanation>{example.explanation}</S.Explanation>
                  )}
                </S.Solution>
              </S.ExampleItem>
            ))}
          </S.ExampleList>
        </S.Section>
      )}

      {topic.prerequisites && topic.prerequisites.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <BsLightbulb />
            <span>선수 지식</span>
          </S.SectionTitle>
          <S.PrerequisiteList>
            {topic.prerequisites.map((prerequisite, index) => (
              <S.PrerequisiteItem key={index}>
                <S.PrerequisiteTitle>{prerequisite.title}</S.PrerequisiteTitle>
                <S.PrerequisiteDescription>
                  {prerequisite.description}
                </S.PrerequisiteDescription>
                {prerequisite.link && (
                  <S.PrerequisiteLink to={prerequisite.link}>
                    학습하기
                  </S.PrerequisiteLink>
                )}
              </S.PrerequisiteItem>
            ))}
          </S.PrerequisiteList>
        </S.Section>
      )}

      {topic.formulas && topic.formulas.length > 0 && (
        <S.Section>
          <S.SectionTitle>
            <BsBook />
            <span>주요 공식</span>
          </S.SectionTitle>
          <S.FormulaList>
            {topic.formulas.map((formula) => (
              <S.FormulaItem key={formula.id}>
                <S.FormulaTitle>{formula.title}</S.FormulaTitle>
                {renderMathContent(formula.formula)}
                <S.FormulaDescription>
                  {formula.description}
                </S.FormulaDescription>
              </S.FormulaItem>
            ))}
          </S.FormulaList>
        </S.Section>
      )}
    </S.Container>
  );
};

export default MathDetail;
