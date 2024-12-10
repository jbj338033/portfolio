import { memo, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsCalendarWeek } from "react-icons/bs";
import { DatabaseEntry } from "../../../types/database";
import * as S from "./style";

interface Props {
  entries: DatabaseEntry[];
  viewMode: "list" | "grid";
  onItemClick?: () => void;
}

const EntryCardHeader = memo(
  ({
    week,
    topic,
    isActive,
  }: {
    week: number;
    topic: string;
    isActive: boolean;
  }) => (
    <S.CardHeader>
      <S.WeekBadge isActive={isActive}>
        <BsCalendarWeek aria-hidden="true" />
        {week}주차
      </S.WeekBadge>
      <S.TopicBadge isActive={isActive}>{topic}</S.TopicBadge>
    </S.CardHeader>
  )
);

EntryCardHeader.displayName = "EntryCardHeader";

const EntryCardFooter = memo(
  ({ assignmentsCount, date }: { assignmentsCount?: number; date: string }) => (
    <S.CardFooter>
      {assignmentsCount !== undefined && assignmentsCount > 0 && (
        <S.AssignmentBadge>과제 {assignmentsCount}개</S.AssignmentBadge>
      )}
      <S.Date>{date}</S.Date>
    </S.CardFooter>
  )
);

EntryCardFooter.displayName = "EntryCardFooter";

const GridEntry = memo(
  ({
    entry,
    isActive,
    onClick,
  }: {
    entry: DatabaseEntry;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <S.EntryCard onClick={onClick} isActive={isActive}>
      <EntryCardHeader
        week={entry.week}
        topic={entry.topic}
        isActive={isActive}
      />
      <S.Title isActive={isActive}>{entry.title}</S.Title>
      <S.Summary>{entry.summary}</S.Summary>
      <EntryCardFooter
        assignmentsCount={entry.assignments?.length}
        date={entry.date}
      />
    </S.EntryCard>
  )
);

GridEntry.displayName = "GridEntry";

const ListEntry = memo(
  ({
    entry,
    isActive,
    onClick,
  }: {
    entry: DatabaseEntry;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <S.ListItem onClick={onClick} isActive={isActive}>
      <S.ListWeek isActive={isActive}>
        <BsCalendarWeek aria-hidden="true" />
        <span>{entry.week}주차</span>
      </S.ListWeek>
      <S.ListTitle isActive={isActive}>{entry.title}</S.ListTitle>
      <S.ListTopic isActive={isActive}>{entry.topic}</S.ListTopic>
    </S.ListItem>
  )
);

ListEntry.displayName = "ListEntry";

const DatabaseList = memo(({ entries, viewMode, onItemClick }: Props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentId = useMemo(() => Number(id), [id]);

  const handleEntryClick = useCallback(
    (entryId: number) => {
      navigate(`/database/${entryId}`);
      onItemClick?.();
    },
    [navigate, onItemClick]
  );

  const renderEntry = useCallback(
    (entry: DatabaseEntry) => {
      const isActive = entry.id === currentId;
      const onClick = () => handleEntryClick(entry.id);

      return viewMode === "grid" ? (
        <GridEntry
          key={entry.id}
          entry={entry}
          isActive={isActive}
          onClick={onClick}
        />
      ) : (
        <ListEntry
          key={entry.id}
          entry={entry}
          isActive={isActive}
          onClick={onClick}
        />
      );
    },
    [viewMode, currentId, handleEntryClick]
  );

  return (
    <S.Container viewMode={viewMode}>{entries.map(renderEntry)}</S.Container>
  );
});

DatabaseList.displayName = "DatabaseList";

export default DatabaseList;
