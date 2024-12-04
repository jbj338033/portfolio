import { useNavigate } from "react-router-dom";
import { BsCalendarRange, BsPeople, BsArrowRight } from "react-icons/bs";
import { NARSHA_PROJECTS } from "../../../constants/narsha";
import * as S from "./style";

const NarshaList = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.Title>나르샤 프로젝트</S.Title>
        <S.Description>
          진행했던 나르샤 프로젝트들의 활동 기록을 확인할 수 있습니다.
        </S.Description>
      </S.Header>

      <S.ProjectGrid>
        {NARSHA_PROJECTS.map((project) => (
          <S.ProjectCard
            key={project.id}
            onClick={() => navigate(`/narsha/${project.id}`)}
          >
            <S.ProjectHeader>
              <S.StatusBadge status={project.status}>
                {project.status === "ongoing"
                  ? "진행중"
                  : project.status === "completed"
                  ? "완료"
                  : "계획중"}
              </S.StatusBadge>
            </S.ProjectHeader>

            <S.ProjectContent>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
              <S.ProjectDescription>{project.description}</S.ProjectDescription>

              <S.ProjectMeta>
                <S.MetaItem>
                  <BsCalendarRange />
                  {project.period}
                </S.MetaItem>
                <S.MetaItem>
                  <BsPeople />
                  {project.teamSize}명
                </S.MetaItem>
              </S.ProjectMeta>
            </S.ProjectContent>

            <S.TechStack>
              {project.techStack.map((tech, index) => (
                <S.TechBadge key={index}>{tech}</S.TechBadge>
              ))}
            </S.TechStack>

            <S.ProjectFooter>
              <S.EntryCount>{project.entries.length}개의 활동</S.EntryCount>
              <BsArrowRight />
            </S.ProjectFooter>
          </S.ProjectCard>
        ))}
      </S.ProjectGrid>
    </S.Container>
  );
};

export default NarshaList;
