import { useParams } from "react-router-dom";
import { useMemo, memo } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ALL_ALGORITHMS } from "../../../constants/algorithm";
import * as S from "./style";
import { Algorithm } from "../../../types/algorithm";

interface ComplexityProps {
  title: string;
  value: string;
}

const ComplexityCard = memo(({ title, value }: ComplexityProps) => (
  <S.ComplexityCard>
    <S.ComplexityTitle>{title}</S.ComplexityTitle>
    <S.ComplexityValue>{value}</S.ComplexityValue>
  </S.ComplexityCard>
));

ComplexityCard.displayName = "ComplexityCard";

const CategoryBadge = memo(
  ({ category }: { category: Algorithm["category"] }) => (
    <S.CategoryWrapper>
      <S.Category>{category === "sort" ? "정렬" : "그래프"}</S.Category>
    </S.CategoryWrapper>
  )
);

CategoryBadge.displayName = "CategoryBadge";

const AlgorithmHeader = memo(
  ({ title, category }: Pick<Algorithm, "title" | "category">) => (
    <S.Header>
      <S.Title>{title}</S.Title>
      <CategoryBadge category={category} />
    </S.Header>
  )
);

AlgorithmHeader.displayName = "AlgorithmHeader";

const DescriptionSection = memo(
  ({ description }: Pick<Algorithm, "description">) => (
    <S.Section>
      <S.SectionTitle>설명</S.SectionTitle>
      <S.Description>{description}</S.Description>
    </S.Section>
  )
);

DescriptionSection.displayName = "DescriptionSection";

const ComplexitySection = memo(
  ({
    timeComplexity,
    spaceComplexity,
  }: Pick<Algorithm, "timeComplexity" | "spaceComplexity">) => (
    <S.Section>
      <S.SectionTitle>복잡도</S.SectionTitle>
      <S.ComplexityGrid>
        <ComplexityCard title="시간 복잡도" value={timeComplexity} />
        <ComplexityCard title="공간 복잡도" value={spaceComplexity} />
      </S.ComplexityGrid>
    </S.Section>
  )
);

ComplexitySection.displayName = "ComplexitySection";

const CodeSection = memo(({ code }: { code: string }) => (
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
        {code}
      </SyntaxHighlighter>
    </S.CodeWrapper>
  </S.Section>
));

CodeSection.displayName = "CodeSection";

const ErrorView = memo(() => (
  <S.Container>
    <S.ErrorMessage>알고리즘을 찾을 수 없습니다.</S.ErrorMessage>
  </S.Container>
));

ErrorView.displayName = "ErrorView";

const AlgorithmDetail = () => {
  const { id } = useParams<{ id: string }>();

  const algorithm = useMemo(
    () => ALL_ALGORITHMS.find((algo) => algo.id === id),
    [id]
  );

  if (!algorithm) {
    return <ErrorView />;
  }

  return (
    <S.Container>
      <AlgorithmHeader title={algorithm.title} category={algorithm.category} />
      <DescriptionSection description={algorithm.description} />
      <ComplexitySection
        timeComplexity={algorithm.timeComplexity}
        spaceComplexity={algorithm.spaceComplexity}
      />
      {algorithm.pythonCode && <CodeSection code={algorithm.pythonCode} />}
    </S.Container>
  );
};

export default memo(AlgorithmDetail);
