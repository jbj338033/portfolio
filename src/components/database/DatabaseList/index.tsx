import { useNavigate, useParams } from "react-router-dom";
import { BsCalendarWeek } from "react-icons/bs";
import { DatabaseClassEntry } from "../../../types/database";
import * as S from "./style";

interface Props {
  entries: DatabaseClassEntry[];
  viewMode: "list" | "grid";
  onItemClick?: () => void;
}

const DatabaseList = ({ entries, viewMode, onItemClick }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEntryClick = (entryId: number) => {
    navigate(`/database/${entryId}`);
    onItemClick?.();
  };

  const renderGridView = (entry: DatabaseClassEntry) => (
    <S.EntryCard
      key={entry.id}
      onClick={() => handleEntryClick(entry.id)}
      isActive={entry.id === Number(id)}
    >
      <S.CardHeader>
        <S.WeekBadge isActive={entry.id === Number(id)}>
          <BsCalendarWeek />
          {entry.week}주차
        </S.WeekBadge>
        <S.TopicBadge isActive={entry.id === Number(id)}>
          {entry.topic}
        </S.TopicBadge>
      </S.CardHeader>

      <S.Title isActive={entry.id === Number(id)}>{entry.title}</S.Title>
      <S.Summary>{entry.summary}</S.Summary>

      <S.CardFooter>
        {entry.assignments && (
          <S.AssignmentBadge>
            과제 {entry.assignments.length}개
          </S.AssignmentBadge>
        )}
        <S.Date>{entry.date}</S.Date>
      </S.CardFooter>
    </S.EntryCard>
  );

  const renderListView = (entry: DatabaseClassEntry) => (
    <S.ListItem
      key={entry.id}
      onClick={() => handleEntryClick(entry.id)}
      isActive={entry.id === Number(id)}
    >
      <S.ListWeek isActive={entry.id === Number(id)}>
        <BsCalendarWeek />
        <span>{entry.week}주차</span>
      </S.ListWeek>
      <S.ListTitle isActive={entry.id === Number(id)}>
        {entry.title}
      </S.ListTitle>
      <S.ListTopic isActive={entry.id === Number(id)}>
        {entry.topic}
      </S.ListTopic>
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
