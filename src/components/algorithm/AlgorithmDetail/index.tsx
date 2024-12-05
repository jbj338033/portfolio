// index.tsx
import { useParams } from "react-router-dom";
import { ALL_ALGORITHMS } from "../../../constants/algorithm";
import { useMemo } from "react";
import * as S from "./style";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ComplexityProps {
  title: string;
  value: string;
}

const ComplexityCard = ({ title, value }: ComplexityProps) => (
  <S.ComplexityCard>
    <S.ComplexityTitle>{title}</S.ComplexityTitle>
    <S.ComplexityValue>{value}</S.ComplexityValue>
  </S.ComplexityCard>
);

export const AlgorithmDetail = () => {
  const { id } = useParams();

  const algorithm = useMemo(
    () => ALL_ALGORITHMS.find((algo) => algo.id === id),
    [id]
  );

  if (!algorithm) {
    return (
      <S.Container>
        <S.ErrorMessage>알고리즘을 찾을 수 없습니다.</S.ErrorMessage>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>{algorithm.title}</S.Title>
        <S.CategoryWrapper>
          <S.Category>
            {algorithm.category === "sort" ? "정렬" : "그래프"}
          </S.Category>
        </S.CategoryWrapper>
      </S.Header>

      <S.Section>
        <S.SectionTitle>설명</S.SectionTitle>
        <S.Description>{algorithm.description}</S.Description>
      </S.Section>

      <S.Section>
        <S.SectionTitle>복잡도</S.SectionTitle>
        <S.ComplexityGrid>
          <ComplexityCard
            title="시간 복잡도"
            value={algorithm.timeComplexity}
          />
          <ComplexityCard
            title="공간 복잡도"
            value={algorithm.spaceComplexity}
          />
        </S.ComplexityGrid>
      </S.Section>

      {algorithm.pythonCode && (
        <S.Section>
          <S.SectionTitle>Python 구현</S.SectionTitle>
          <S.CodeWrapper>
            <SyntaxHighlighter
              language="python"
              style={atomOneDark}
              customStyle={{
                background: "transparent",
                padding: "0",
                margin: "0",
              }}
            >
              {algorithm.pythonCode}
            </SyntaxHighlighter>
          </S.CodeWrapper>
        </S.Section>
      )}
    </S.Container>
  );
};
