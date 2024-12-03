import { useNavigate, useParams } from "react-router-dom";
import { BsCalendarWeek } from "react-icons/bs";
import { DatabaseClassEntry } from "../../../types/database";
import * as S from "./style";

interface Props {
  entries: DatabaseClassEntry[];
  viewMode: "list" | "grid";
}

const DatabaseList = ({ entries, viewMode }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const renderGridView = (entry: DatabaseClassEntry) => (
    <S.EntryCard
      key={entry.id}
      onClick={() => navigate(`/database/${entry.id}`)}
      isActive={entry.id === Number(id)}
      viewMode="grid"
    >
      <S.CardHeader>
        <S.WeekBadge>
          <BsCalendarWeek />
          {entry.week}주차
        </S.WeekBadge>
        <S.TopicBadge>{entry.topic}</S.TopicBadge>
      </S.CardHeader>

      <S.Title>{entry.title}</S.Title>
      <S.Summary>{entry.summary}</S.Summary>

      {entry.assignments && (
        <S.AssignmentBadge>과제 {entry.assignments.length}개</S.AssignmentBadge>
      )}

      <S.Date>{entry.date}</S.Date>
    </S.EntryCard>
  );

  const renderListView = (entry: DatabaseClassEntry) => (
    <S.ListItem
      key={entry.id}
      onClick={() => navigate(`/database/${entry.id}`)}
      isActive={entry.id === Number(id)}
    >
      <S.ListWeek>
        <BsCalendarWeek />
        {entry.week}주차
      </S.ListWeek>
      <S.ListTitle>{entry.title}</S.ListTitle>
    </S.ListItem>
  );

  return (
    <S.Container viewMode={viewMode}>
      {entries.map((entry) =>
        viewMode === "grid" ? renderGridView(entry) : renderListView(entry)
      )}
    </S.Container>
  );
};

export default DatabaseList;
