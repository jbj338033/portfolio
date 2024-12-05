import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCalendarRange, BsPeople } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import debounce from "lodash/debounce";
import { NARSHA_PROJECTS } from "../../../constants/narsha";
import * as S from "./style";

const NarshaList = () => {
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = useCallback(
    debounce((searchTerm: string) => {
      const normalizedSearch = searchTerm.toLowerCase().trim();

      const filteredProjects = !normalizedSearch
        ? NARSHA_PROJECTS
        : NARSHA_PROJECTS.filter(
            (project) =>
              project.title.toLowerCase().includes(normalizedSearch) ||
              project.description.toLowerCase().includes(normalizedSearch) ||
              project.techStack.some((tech) =>
                tech.toLowerCase().includes(normalizedSearch)
              )
          );

      setFilteredProjects(filteredProjects);
    }, 300),
    []
  );

  const [filteredProjects, setFilteredProjects] = useState(NARSHA_PROJECTS);

  return (
    <S.Content>
      <S.SearchWrapper>
        <S.SearchIcon>
          <IoSearch />
        </S.SearchIcon>
        <S.SearchInput
          ref={searchRef}
          placeholder="프로젝트 검색..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </S.SearchWrapper>

      <S.ProjectGrid>
        {filteredProjects.length === 0 ? (
          <S.EmptyMessage>검색 결과가 없습니다.</S.EmptyMessage>
        ) : (
          filteredProjects.map((project) => (
            <S.ProjectCard
              key={project.id}
              onClick={() => navigate(`/narsha/${project.id}`)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/narsha/${project.id}`);
                }
              }}
            >
              <S.CardHeader>
                <S.StatusBadge status={project.status}>
                  {project.status === "ongoing"
                    ? "진행중"
                    : project.status === "completed"
                    ? "완료"
                    : "계획중"}
                </S.StatusBadge>
              </S.CardHeader>

              <S.CardBody>
                <S.Title>{project.title}</S.Title>
                <S.Description>{project.description}</S.Description>

                <S.MetaInfo>
                  <S.MetaItem>
                    <BsCalendarRange />
                    <span>{project.period}</span>
                  </S.MetaItem>
                  <S.MetaItem>
                    <BsPeople />
                    <span>{project.teamSize}명</span>
                  </S.MetaItem>
                </S.MetaInfo>

                <S.TechList>
                  {project.techStack.map((tech, index) => (
                    <S.TechItem key={`${project.id}-${tech}-${index}`}>
                      {tech}
                    </S.TechItem>
                  ))}
                </S.TechList>
              </S.CardBody>

              <S.CardFooter>
                <S.EntryCount>{project.entries.length}개의 활동</S.EntryCount>
              </S.CardFooter>
            </S.ProjectCard>
          ))
        )}
      </S.ProjectGrid>
    </S.Content>
  );
};

export default NarshaList;
