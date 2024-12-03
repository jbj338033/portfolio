import { useParams, useNavigate } from "react-router-dom";
import {
  BsCalendarWeek,
  BsPeople,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { NARSHA_PROJECTS } from "../../../constants/narsha";
import * as S from "./style";

const NarshaDetail = () => {
  const { projectId, entryId } = useParams();
  const navigate = useNavigate();

  const currentProject = NARSHA_PROJECTS.find(
    (project) => project.id === Number(projectId)
  );

  const currentEntry = currentProject?.entries.find(
    (entry) => entry.id === Number(entryId)
  );

  const currentIndex =
    currentProject?.entries.findIndex(
      (entry) => entry.id === Number(entryId)
    ) ?? -1;

  const prevEntry =
    currentIndex > 0 ? currentProject?.entries[currentIndex - 1] : null;
  const nextEntry = currentProject?.entries[currentIndex + 1] ?? null;

  if (!currentEntry || !currentProject) {
    navigate("/narsha");
    return null;
  }

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTop>
          <S.WeekBadge>
            <BsCalendarWeek />
            {currentEntry.week}주차
          </S.WeekBadge>
          <S.Date>{currentEntry.date}</S.Date>
        </S.HeaderTop>

        <S.Title>{currentEntry.title}</S.Title>

        <S.TeamInfo>
          <BsPeople />
          <S.TeamMembers>
            {currentEntry.teamMembers.map((member, index) => (
              <S.Member key={member}>
                {member}
                {index < currentEntry.teamMembers.length - 1 && ", "}
              </S.Member>
            ))}
          </S.TeamMembers>
        </S.TeamInfo>
      </S.Header>

      <S.Content>
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

        <S.Section variant="achievement">
          <S.SectionTitle>주요 성과</S.SectionTitle>
          <S.AchievementContent>
            {currentEntry.achievement}
          </S.AchievementContent>
        </S.Section>

        <S.Section variant="plan">
          <S.SectionTitle>다음 계획</S.SectionTitle>
          <S.PlanContent>{currentEntry.nextPlan}</S.PlanContent>
        </S.Section>
      </S.Content>

      <S.Navigation>
        {prevEntry && (
          <S.NavLink to={`/narsha/${projectId}/${prevEntry.id}`}>
            <S.NavCard>
              <BsArrowLeft />
              <S.NavContent>
                <S.NavLabel>이전 주차</S.NavLabel>
                <S.NavTitle>{prevEntry.title}</S.NavTitle>
                <S.NavWeek>{prevEntry.week}주차</S.NavWeek>
              </S.NavContent>
            </S.NavCard>
          </S.NavLink>
        )}
        {nextEntry && (
          <S.NavLink to={`/narsha/${projectId}/${nextEntry.id}`} isNext>
            <S.NavCard>
              <S.NavContent>
                <S.NavLabel>다음 주차</S.NavLabel>
                <S.NavTitle>{nextEntry.title}</S.NavTitle>
                <S.NavWeek>{nextEntry.week}주차</S.NavWeek>
              </S.NavContent>
              <BsArrowRight />
            </S.NavCard>
          </S.NavLink>
        )}
      </S.Navigation>
    </S.Container>
  );
};

export default NarshaDetail;
