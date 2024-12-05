// NarshaDiary/index.tsx
import { useState } from "react";
import { BsCalendarWeek, BsArrowRight } from "react-icons/bs";
import { NarshaEntry } from "../../../types/narsha";
import * as S from "./style";

interface Props {
  entries: NarshaEntry[];
  projectId: number;
}

const NarshaDiary = ({ entries, projectId }: Props) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  if (entries.length === 0) {
    return (
      <S.Content>
        <S.EmptyState>
          <span>등록된 활동이 없습니다.</span>
        </S.EmptyState>
      </S.Content>
    );
  }

  return (
    <S.Content>
      {entries.map((entry) => (
        <S.EntryCard
          key={entry.id}
          to={`/narsha/${projectId}/${entry.id}`}
          onMouseEnter={() => setHoveredCard(entry.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <S.CardHeader>
            <S.WeekBadge>
              <BsCalendarWeek />
              {entry.week}주차
            </S.WeekBadge>
            <S.Date>{entry.date}</S.Date>
          </S.CardHeader>

          <S.CardBody>
            <S.Title>{entry.title}</S.Title>
            {entry.summary && <S.Summary>{entry.summary}</S.Summary>}
            {entry.contents && entry.contents.length > 0 && (
              <S.PreviewList>
                {entry.contents.map((content, index) => (
                  <S.PreviewItem key={`${entry.id}-content-${index}`}>
                    <S.PreviewTitle>{content.title}</S.PreviewTitle>
                    {content.description && content.description.length > 0 && (
                      <S.PreviewText>
                        {content.description[0]}
                        {content.description.length > 1 && "..."}
                      </S.PreviewText>
                    )}
                  </S.PreviewItem>
                ))}
              </S.PreviewList>
            )}
          </S.CardBody>

          <S.CardFooter>
            <S.ViewMore>
              <span>자세히 보기</span>
              <S.ViewMoreIcon isHovered={hoveredCard === entry.id}>
                <BsArrowRight />
              </S.ViewMoreIcon>
            </S.ViewMore>
          </S.CardFooter>
        </S.EntryCard>
      ))}
    </S.Content>
  );
};

export default NarshaDiary;
