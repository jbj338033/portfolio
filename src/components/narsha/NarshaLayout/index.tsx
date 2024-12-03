import { useParams, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { NARSHA_PROJECTS } from "../../../constants/narsha";
import * as S from "./style";

const NarshaLayout = () => {
  const { projectId, entryId } = useParams();
  const navigate = useNavigate();
  const [isProjectSelectorOpen, setProjectSelectorOpen] = useState(false);

  const currentProject = projectId
    ? NARSHA_PROJECTS.find((p) => p.id === Number(projectId))
    : null;

  const handleProjectSelect = (id: number) => {
    navigate(`/narsha/${id}`);
    setProjectSelectorOpen(false);
  };

  return (
    <S.Container>
      {currentProject ? (
        <>
          <S.Sidebar>
            <S.SidebarHeader>
              <S.HomeLink to="/">
                <IoMdHome />
                홈으로
              </S.HomeLink>
              <S.ProjectSelector>
                <S.ProjectButton
                  onClick={() => setProjectSelectorOpen(!isProjectSelectorOpen)}
                  isOpen={isProjectSelectorOpen}
                >
                  <span>{currentProject.title}</span>
                  <BsChevronDown />
                </S.ProjectButton>
                {isProjectSelectorOpen && (
                  <S.ProjectDropdown>
                    {NARSHA_PROJECTS.map((project) => (
                      <S.ProjectOption
                        key={project.id}
                        onClick={() => handleProjectSelect(project.id)}
                        isSelected={project.id === currentProject.id}
                      >
                        <div>
                          <S.ProjectName>{project.title}</S.ProjectName>
                          <S.ProjectPeriod>{project.period}</S.ProjectPeriod>
                        </div>
                        <S.ProjectStatus status={project.status}>
                          {project.status === "ongoing" ? "진행중" : "완료"}
                        </S.ProjectStatus>
                      </S.ProjectOption>
                    ))}
                  </S.ProjectDropdown>
                )}
              </S.ProjectSelector>
              <S.Period>{currentProject.period}</S.Period>
            </S.SidebarHeader>
            <S.SidebarContent>
              {currentProject.entries.map((entry) => (
                <S.EntryLink
                  key={entry.id}
                  to={`/narsha/${projectId}/${entry.id}`}
                  isActive={entry.id === Number(entryId)}
                >
                  <S.Week>{entry.week}주차</S.Week>
                  <S.EntryTitle>{entry.title}</S.EntryTitle>
                  {entry.summary && (
                    <S.EntrySummary>{entry.summary}</S.EntrySummary>
                  )}
                </S.EntryLink>
              ))}
            </S.SidebarContent>
          </S.Sidebar>
          <S.Main withSidebar>
            <Outlet />
          </S.Main>
        </>
      ) : (
        <S.Main>
          <Outlet />
        </S.Main>
      )}
    </S.Container>
  );
};

export default NarshaLayout;
