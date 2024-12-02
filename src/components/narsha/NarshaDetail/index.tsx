import { useParams } from "react-router-dom";
import * as S from "./style";
import { BsCalendarWeek, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BiGroup } from "react-icons/bi";
import { NARSHA_ENTRIES } from "../../../constants/narsha";

const NarshaDetail = () => {
  const { id } = useParams();
  const currentEntry = NARSHA_ENTRIES.find((entry) => entry.id === Number(id));
  const currentIndex = NARSHA_ENTRIES.findIndex(
    (entry) => entry.id === Number(id)
  );
  const prevEntry = currentIndex > 0 ? NARSHA_ENTRIES[currentIndex - 1] : null;
  const nextEntry =
    currentIndex < NARSHA_ENTRIES.length - 1
      ? NARSHA_ENTRIES[currentIndex + 1]
      : null;

  if (!currentEntry) return null;

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Header>
          <S.WeekBadge>
            <BsCalendarWeek />
            {currentEntry.week}주차
          </S.WeekBadge>
          <S.Date>{currentEntry.date}</S.Date>
        </S.Header>

        <S.Title>{currentEntry.title}</S.Title>

        <S.TeamSection>
          <BiGroup />
          <S.TeamMembers>{currentEntry.teamMembers.join(", ")}</S.TeamMembers>
        </S.TeamSection>

        {currentEntry.contents.map((content, index) => (
          <S.Section key={index}>
            <S.SectionTitle>{content.title}</S.SectionTitle>
            <S.List>
              {content.description.map((desc, i) => (
                <S.ListItem key={i}>{desc}</S.ListItem>
              ))}
            </S.List>
          </S.Section>
        ))}

        <S.Section>
          <S.SectionTitle>주요 성과</S.SectionTitle>
          <S.Achievement>{currentEntry.achievement}</S.Achievement>
        </S.Section>

        <S.Section>
          <S.SectionTitle>다음 계획</S.SectionTitle>
          <S.NextPlan>{currentEntry.nextPlan}</S.NextPlan>
        </S.Section>

        <S.Navigation>
          {prevEntry && (
            <S.NavLink to={`/narsha/${prevEntry.id}`} $direction="prev">
              <S.NavContent>
                <BsArrowLeft />
                <div>
                  <S.NavLabel>이전 주차</S.NavLabel>
                  <S.NavWeek>
                    <BsCalendarWeek />
                    {prevEntry.week}주차
                  </S.NavWeek>
                </div>
              </S.NavContent>
            </S.NavLink>
          )}
          {nextEntry && (
            <S.NavLink to={`/narsha/${nextEntry.id}`} $direction="next">
              <S.NavContent>
                <div>
                  <S.NavLabel>다음 주차</S.NavLabel>
                  <S.NavWeek>
                    {nextEntry.week}주차
                    <BsCalendarWeek />
                  </S.NavWeek>
                </div>
                <BsArrowRight />
              </S.NavContent>
            </S.NavLink>
          )}
        </S.Navigation>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default NarshaDetail;
