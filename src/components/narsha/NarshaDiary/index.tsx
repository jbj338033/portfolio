import { useNavigate, useLocation } from "react-router-dom";
import * as S from "./style";
import { BsCalendarWeek } from "react-icons/bs";
import { NarshaEntry } from "../../../types/narsha";

interface Props {
  entries: NarshaEntry[];
  projectId: number;
  compact?: boolean;
}

const NarshaDiary = ({ entries, projectId, compact = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = location.pathname.split("/").pop();

  const handleEntryClick = (entryId: number) => {
    navigate(`/narsha/${projectId}/${entryId}`);
  };

  return (
    <S.Container $compact={compact}>
      {entries.map((entry) => (
        <S.EntryCard
          key={entry.id}
          onClick={() => handleEntryClick(entry.id)}
          $isActive={entry.id === Number(currentId)}
          $compact={compact}
        >
          <S.EntryHeader $compact={compact}>
            <S.WeekBadge>
              <BsCalendarWeek />
              {entry.week}주차
            </S.WeekBadge>
            <S.Date>{entry.date}</S.Date>
          </S.EntryHeader>
          <S.EntryTitle $compact={compact}>{entry.title}</S.EntryTitle>
          {!compact && entry.summary && (
            <S.EntrySummary>{entry.summary}</S.EntrySummary>
          )}
        </S.EntryCard>
      ))}
    </S.Container>
  );
};

export default NarshaDiary;