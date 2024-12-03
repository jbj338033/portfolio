import { Topic } from "../../../types/dataStructure";
import * as S from "./style";

interface DataStructureListProps {
  topics: Topic[];
  structureId: number;
  compact?: boolean;
}

const DataStructureList = ({
  topics,
  structureId,
  compact,
}: DataStructureListProps) => {
  return (
    <S.List>
      {topics.map((topic) => (
        <S.ListItem key={topic.id}>
          <S.TopicLink
            to={`/data-structure/${structureId}/topic/${topic.id}`}
            compact={compact}
          >
            <S.TopicHeader>
              <S.TopicTitle>{topic.title}</S.TopicTitle>
            </S.TopicHeader>
            {!compact && <S.TopicContent>{topic.content}</S.TopicContent>}
          </S.TopicLink>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export default DataStructureList;
