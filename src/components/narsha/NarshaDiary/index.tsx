import { useNavigate } from "react-router-dom";
import { BsCalendarWeek } from "react-icons/bs";
import { NarshaEntry } from "../../../types/narsha";
import * as S from "./style";

interface Props {
  entries: NarshaEntry[];
  projectId: number;
}

const NarshaDiary = ({ entries, projectId }: Props) => {
  const navigate = useNavigate();

  const handleEntryClick = (entryId: number) => {
    navigate(`/narsha/${projectId}/${entryId}`);
  };

  return (
    <S.Container>
      <S.EntryList>
        {entries.map((entry) => (
          <S.Entry key={entry.id} onClick={() => handleEntryClick(entry.id)}>
            <S.EntryHeader>
              <S.WeekBadge>
                <BsCalendarWeek />
                {entry.week}주차
              </S.WeekBadge>
              <S.Date>{entry.date}</S.Date>
            </S.EntryHeader>
            <S.Title>{entry.title}</S.Title>
            {entry.summary && <S.Summary>{entry.summary}</S.Summary>}
          </S.Entry>
        ))}
      </S.EntryList>
    </S.Container>
  );
};

export default NarshaDiary;
