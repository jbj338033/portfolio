import { useParams } from "react-router-dom";
import { memo, useMemo } from "react";
import {
  SORT_ALGORITHMS,
  GRAPH_ALGORITHMS,
} from "../../../constants/algorithm";
import * as S from "./style";
import { Algorithm } from "../../../types/algorithm";

interface HeaderProps {
  title: string;
  count: number;
}

const ListHeader = memo(({ title, count }: HeaderProps) => (
  <S.Header>
    <S.Title>{title}</S.Title>
    <S.Count>{count}개의 알고리즘</S.Count>
  </S.Header>
));

ListHeader.displayName = "ListHeader";

const AlgorithmCard = memo(
  ({ algorithm, category }: { algorithm: Algorithm; category: string }) => (
    <S.Card to={`/algorithm/${category}/${algorithm.id}`}>
      <S.CardTitle>{algorithm.title}</S.CardTitle>
      <S.CardDescription>{algorithm.description}</S.CardDescription>
      <S.CardFooter>
        <S.ComplexityBadge>
          시간 복잡도: {algorithm.timeComplexity}
        </S.ComplexityBadge>
      </S.CardFooter>
    </S.Card>
  )
);

AlgorithmCard.displayName = "AlgorithmCard";

const AlgorithmList = () => {
  const { category = "sort" } = useParams<{ category: "sort" | "graph" }>();

  const { algorithms, categoryTitle } = useMemo(
    () => ({
      algorithms: category === "sort" ? SORT_ALGORITHMS : GRAPH_ALGORITHMS,
      categoryTitle: category === "sort" ? "정렬 알고리즘" : "그래프 알고리즘",
    }),
    [category]
  );

  return (
    <S.Container>
      <ListHeader title={categoryTitle} count={algorithms.length} />
      <S.Grid>
        {algorithms.map((algo) => (
          <AlgorithmCard key={algo.id} algorithm={algo} category={category} />
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default memo(AlgorithmList);
