import { useParams, useNavigate } from "react-router-dom";
import { BsCalendarWeek, BsPeople, BsArrowLeft } from "react-icons/bs";
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

  if (!currentEntry || !currentProject) {
    navigate("/narsha");
    return null;
  }

  const currentIndex = currentProject.entries.findIndex(
    (entry) => entry.id === Number(entryId)
  );

  const prevEntry =
    currentIndex > 0 ? currentProject.entries[currentIndex - 1] : null;

  const nextEntry =
    currentIndex < currentProject.entries.length - 1
      ? currentProject.entries[currentIndex + 1]
      : null;

  return (
    <S.Content>
      <S.Header>
        <S.HeaderInfo>
          <S.WeekBadge>
            <BsCalendarWeek />
            {currentEntry.week}주차
          </S.WeekBadge>
          <S.Date>{currentEntry.date}</S.Date>
          <S.StatusBadge status={currentProject.status}>
            {currentProject.status === "ongoing"
              ? "진행중"
              : currentProject.status === "completed"
              ? "완료"
              : "계획중"}
          </S.StatusBadge>
        </S.HeaderInfo>

        <S.Title>{currentEntry.title}</S.Title>

        <S.TeamInfoCard>
          <BsPeople />
          <S.TeamList>
            {currentEntry.teamMembers.map((member, index) => (
              <S.TeamMember key={`${member}-${index}`}>
                {member}
                {index < currentEntry.teamMembers.length - 1 && ", "}
              </S.TeamMember>
            ))}
          </S.TeamList>
        </S.TeamInfoCard>
      </S.Header>

      <S.ContentSection>
        {currentEntry.contents.map((content, index) => (
          <S.Section key={`content-${index}`}>
            <S.SectionTitle>{content.title}</S.SectionTitle>
            <S.List>
              {content.description.map((desc, i) => (
                <S.ListItem key={`desc-${i}`}>{desc}</S.ListItem>
              ))}
            </S.List>
          </S.Section>
        ))}

        {currentEntry.achievement && (
          <S.Section variant="achievement">
            <S.SectionTitle>주요 성과</S.SectionTitle>
            <S.Text>{currentEntry.achievement}</S.Text>
          </S.Section>
        )}

        {currentEntry.nextPlan && (
          <S.Section variant="plan">
            <S.SectionTitle>다음 계획</S.SectionTitle>
            <S.Text>{currentEntry.nextPlan}</S.Text>
          </S.Section>
        )}
      </S.ContentSection>

      <S.Navigation>
        {prevEntry && (
          <S.NavLink
            to={`/narsha/${projectId}/${prevEntry.id}`}
            aria-label={`이전 활동: ${prevEntry.title}`}
          >
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
          <S.NavLink
            to={`/narsha/${projectId}/${nextEntry.id}`}
            aria-label={`다음 활동: ${nextEntry.title}`}
          >
            <S.NavCard isNext>
              <S.NavContent>
                <S.NavLabel>다음 주차</S.NavLabel>
                <S.NavTitle>{nextEntry.title}</S.NavTitle>
                <S.NavWeek>{nextEntry.week}주차</S.NavWeek>
              </S.NavContent>
              <BsArrowLeft style={{ transform: "rotate(180deg)" }} />
            </S.NavCard>
          </S.NavLink>
        )}
      </S.Navigation>
    </S.Content>
  );
};

export default NarshaDetail;
