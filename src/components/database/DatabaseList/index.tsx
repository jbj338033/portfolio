import { useNavigate, useLocation } from "react-router-dom";
import { BsCalendarWeek, BsCodeSquare } from "react-icons/bs";
import { DatabaseClassEntry } from "../../../types/database";
import * as S from "./style";

interface Props {
  entries: DatabaseClassEntry[];
  compact?: boolean;
}

const DatabaseList = ({ entries, compact = false }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = location.pathname.split("/").pop();

  const handleEntryClick = (id: number) => {
    navigate(`/database/${id}`);
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
          <S.EntryHeader>
            <S.WeekBadge>
              <BsCalendarWeek />
              {entry.week}주차
            </S.WeekBadge>
            <S.TopicBadge>{entry.topic}</S.TopicBadge>
          </S.EntryHeader>

          <S.EntryTitle>{entry.title}</S.EntryTitle>

          {!compact && (
            <>
              <S.Summary>{entry.summary}</S.Summary>
              {entry.codeExamples.length > 0 && (
                <S.CodePreview>
                  <BsCodeSquare />
                  <span>{entry.codeExamples[0].language}</span>
                </S.CodePreview>
              )}
              <S.Keywords>
                {entry.keywords.map((keyword, index) => (
                  <S.Keyword key={index}>{keyword}</S.Keyword>
                ))}
              </S.Keywords>
              {entry.assignments && (
                <S.AssignmentBadge>
                  과제 {entry.assignments.length}개
                </S.AssignmentBadge>
              )}
            </>
          )}

          <S.Date>{entry.date}</S.Date>
        </S.EntryCard>
      ))}
    </S.Container>
  );
};

export default DatabaseList;
