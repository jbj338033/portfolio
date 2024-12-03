import * as S from "./style";
import { DATA_STRUCTURES } from "../../../constants/dataStructure";

const DataStructureListPage = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>자료구조 정리</S.Title>
        <S.Description>
          기본적인 자료구조들의 개념과 구현 방법을 정리했습니다.
        </S.Description>
      </S.Header>

      <S.Grid>
        {DATA_STRUCTURES.map((structure) => (
          <S.Card
            key={structure.id}
            to={`/data-structure/${structure.id}/topic/1`}
          >
            <S.CardHeader>
              <S.CardTitle>{structure.title}</S.CardTitle>
              <S.Category>{structure.category}</S.Category>
            </S.CardHeader>
            <S.TopicsList>
              {structure.topics.map((topic) => (
                <S.TopicItem key={topic.id}>{topic.title}</S.TopicItem>
              ))}
            </S.TopicsList>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default DataStructureListPage;
