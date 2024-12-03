import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as S from "./style";
import { DATA_STRUCTURES } from "../../../constants/dataStructure";

const DataStructurePage = () => {
  const { structureId, topicId } = useParams();

  const structure = DATA_STRUCTURES.find((s) => s.id === Number(structureId));

  const topic = structure?.topics.find((t) => t.id === Number(topicId));

  if (!structure || !topic) {
    return <S.ErrorMessage>주제를 찾을 수 없습니다.</S.ErrorMessage>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>{topic.title}</S.Title>
        <S.Category>{structure.category}</S.Category>
      </S.Header>

      <S.Content>{topic.content}</S.Content>

      {topic.code && (
        <S.CodeBlock>
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
            {topic.code}
          </SyntaxHighlighter>
        </S.CodeBlock>
      )}

      {topic.timeComplexity && (
        <S.ComplexitySection>
          <S.SubTitle>시간 복잡도</S.SubTitle>
          <S.ComplexityGrid>
            {Object.entries(topic.timeComplexity).map(
              ([operation, complexity]) => (
                <S.ComplexityItem key={operation}>
                  <S.ComplexityOperation>
                    {operation.charAt(0).toUpperCase() + operation.slice(1)}
                  </S.ComplexityOperation>
                  <S.ComplexityValue>{complexity}</S.ComplexityValue>
                </S.ComplexityItem>
              )
            )}
          </S.ComplexityGrid>
        </S.ComplexitySection>
      )}
    </S.Container>
  );
};

export default DataStructurePage;
