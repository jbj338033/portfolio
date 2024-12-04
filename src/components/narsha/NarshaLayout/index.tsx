import { useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BsArrowLeft, BsChevronDown, BsList } from "react-icons/bs";
import { NARSHA_PROJECTS } from "../../../constants/narsha";
import * as S from "./style";

const NarshaLayout = () => {
  const navigate = useNavigate();
  const { projectId, entryId } = useParams();
  const [isProjectSelectorOpen, setProjectSelectorOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentProject = projectId
    ? NARSHA_PROJECTS.find((p) => p.id === Number(projectId))
    : null;

  return (
    <S.Container>
      {currentProject ? (
        <>
          <S.MobileHeader>
            <S.MobileHomeLink to="/">
              <IoMdHome />
            </S.MobileHomeLink>
            <S.MobileProjectSelector
              onClick={() => setProjectSelectorOpen(!isProjectSelectorOpen)}
            >
              <span>{currentProject.title}</span>
              <BsChevronDown />
            </S.MobileProjectSelector>
            <S.MobileMenuButton
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <BsList />
            </S.MobileMenuButton>
          </S.MobileHeader>

          <S.Sidebar>
            <S.SidebarHeader>
              <S.HomeLink to="/narsha">
                <BsArrowLeft />
                <span>홈으로 이동</span>
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
                        onClick={() => {
                          navigate(`/narsha/${project.id}`);
                          setProjectSelectorOpen(false);
                        }}
                        isSelected={project.id === Number(projectId)}
                      >
                        <div>
                          <S.ProjectName>{project.title}</S.ProjectName>
                          <S.ProjectPeriod>{project.period}</S.ProjectPeriod>
                        </div>
                        <S.ProjectStatus status={project.status}>
                          {project.status === "ongoing"
                            ? "진행중"
                            : project.status === "completed"
                            ? "완료"
                            : "계획중"}
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

          <S.MobileMenu isOpen={isMobileMenuOpen}>
            <S.MobileMenuHeader>
              <S.Period>{currentProject.period}</S.Period>
            </S.MobileMenuHeader>
            <S.MobileMenuContent>
              {currentProject.entries.map((entry) => (
                <S.EntryLink
                  key={entry.id}
                  to={`/narsha/${projectId}/${entry.id}`}
                  isActive={entry.id === Number(entryId)}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <S.Week>{entry.week}주차</S.Week>
                  <S.EntryTitle>{entry.title}</S.EntryTitle>
                </S.EntryLink>
              ))}
            </S.MobileMenuContent>
          </S.MobileMenu>

          {isMobileMenuOpen && (
            <S.MobileOverlay onClick={() => setMobileMenuOpen(false)} />
          )}

          <S.Main withSidebar>
            <Outlet />
          </S.Main>
        </>
      ) : (
        <>
          <S.HomeLink to="/">
            <BsArrowLeft />
            <span>홈으로 이동</span>
          </S.HomeLink>
          <S.Main>
            <Outlet />
          </S.Main>
        </>
      )}
    </S.Container>
  );
};

export default NarshaLayout;
