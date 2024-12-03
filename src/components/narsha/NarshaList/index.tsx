import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { BsCalendarRange } from "react-icons/bs";
import { NARSHA_PROJECTS } from "../../../constants/narsha";

const NarshaList = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id: number) => {
    navigate(`/narsha/${id}`);
  };

  return (
    <S.Container>
      <S.Title>나르샤 프로젝트</S.Title>
      <S.Description>
        진행했던 나르샤 프로젝트들의 활동 기록을 확인할 수 있습니다.
      </S.Description>

      <S.ProjectGrid>
        {NARSHA_PROJECTS.map((project) => (
          <S.ProjectCard
            key={project.id}
            onClick={() => handleProjectClick(project.id)}
          >
            <S.ProjectHeader>
              <S.Period>
                <BsCalendarRange />
                {project.period}
              </S.Period>
              <S.EntryCount>{project.entries.length}개의 활동</S.EntryCount>
            </S.ProjectHeader>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.ProjectDescription>{project.description}</S.ProjectDescription>
          </S.ProjectCard>
        ))}
      </S.ProjectGrid>
    </S.Container>
  );
};

export default NarshaList;
