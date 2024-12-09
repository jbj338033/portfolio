import { useParams } from "react-router-dom";
import {
  SORT_ALGORITHMS,
  GRAPH_ALGORITHMS,
} from "../../../constants/algorithm";
import * as S from "./style";

const AlgorithmList = () => {
  const { category } = useParams();
  const algorithms = category === "sort" ? SORT_ALGORITHMS : GRAPH_ALGORITHMS;
  const categoryTitle =
    category === "sort" ? "정렬 알고리즘" : "그래프 알고리즘";

  return (
    <S.Container>
      <S.Header>
        <S.Title>{categoryTitle}</S.Title>
        <S.Count>{algorithms.length}개의 알고리즘</S.Count>
      </S.Header>

      <S.Grid>
        {algorithms.map((algo) => (
          <S.Card key={algo.id} to={`/algorithm/${category}/${algo.id}`}>
            <S.CardTitle>{algo.title}</S.CardTitle>
            <S.CardDescription>{algo.description}</S.CardDescription>
            <S.CardFooter>
              <S.ComplexityBadge>
                시간 복잡도: {algo.timeComplexity}
              </S.ComplexityBadge>
            </S.CardFooter>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default AlgorithmList;
