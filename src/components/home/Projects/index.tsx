import * as S from "./style";
import { useState, useCallback, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { VscLock } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Project } from "../../../types/project";
import { PROJECTS } from "../../../constants/project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const regularProjects = PROJECTS.filter((p) => !p.featured);

  const handlePrevImage = useCallback(() => {
    if (!selectedProject?.images || isDragging) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images!.length - 1 : prev - 1
    );
  }, [selectedProject?.images, isDragging]);

  const handleNextImage = useCallback(() => {
    if (!selectedProject?.images || isDragging) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images!.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject?.images, isDragging]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.targetTouches[0].clientX);
    const offset = touchStart - e.targetTouches[0].clientX;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        handleNextImage();
      } else {
        handlePrevImage();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const body = document.body;
    if (selectedProject) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "unset";
    }
    return () => {
      body.style.overflow = "unset";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedProject, handlePrevImage, handleNextImage]);

  const formatPeriod = (startDate: string, endDate?: string) => (
    <S.Period>
      <SlCalender />
      {startDate} ~ {endDate || "진행중"}
    </S.Period>
  );

  return (
    <S.Container id="projects">
      <S.Inner>
        <S.Header>
          <S.Title>Projects</S.Title>
          <S.Description>
            개인 프로젝트와 팀 프로젝트를 소개합니다
          </S.Description>
        </S.Header>

        <S.Content>
          {featuredProjects.length > 0 && (
            <S.FeaturedSection>
              <S.SectionTitle>Featured Projects</S.SectionTitle>
              <S.FeaturedGrid>
                {featuredProjects.map((project) => (
                  <S.ProjectCard
                    key={project.title}
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <S.ProjectImage
                      src={project.thumbnail}
                      alt={project.title}
                    />
                    <S.ProjectContent>
                      <S.ProjectHeader>
                        <S.Category>{project.category}</S.Category>
                        {formatPeriod(project.startDate, project.endDate)}
                      </S.ProjectHeader>
                      <S.ProjectTitle>{project.title}</S.ProjectTitle>
                      <S.ProjectDescription>
                        {project.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </S.ProjectDescription>
                      <S.SkillsList>
                        {project.skills.map((skill) => (
                          <S.SkillItem key={skill}>{skill}</S.SkillItem>
                        ))}
                      </S.SkillsList>
                    </S.ProjectContent>
                  </S.ProjectCard>
                ))}
              </S.FeaturedGrid>
            </S.FeaturedSection>
          )}

          {regularProjects.length > 0 && (
            <S.ProjectsSection>
              <S.SectionTitle>Other Projects</S.SectionTitle>
              <S.ProjectsGrid>
                {regularProjects.map((project) => (
                  <S.ProjectCard
                    key={project.title}
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                  >
                    <S.ProjectImage
                      src={project.thumbnail}
                      alt={project.title}
                    />
                    <S.ProjectContent>
                      <S.ProjectHeader>
                        <S.Category>{project.category}</S.Category>
                        {formatPeriod(project.startDate, project.endDate)}
                      </S.ProjectHeader>
                      <S.ProjectTitle>{project.title}</S.ProjectTitle>
                      <S.ProjectDescription>
                        {project.description.slice(0, 2).map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </S.ProjectDescription>
                      <S.SkillsList>
                        {project.skills.slice(0, 4).map((skill) => (
                          <S.SkillItem key={skill}>{skill}</S.SkillItem>
                        ))}
                        {project.skills.length > 4 && (
                          <S.SkillItem>
                            +{project.skills.length - 4}
                          </S.SkillItem>
                        )}
                      </S.SkillsList>
                    </S.ProjectContent>
                  </S.ProjectCard>
                ))}
              </S.ProjectsGrid>
            </S.ProjectsSection>
          )}
        </S.Content>
      </S.Inner>

      {selectedProject && (
        <S.Modal onClick={() => setSelectedProject(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setSelectedProject(null)}>
              <IoClose />
            </S.CloseButton>
            <S.ModalBody>
              <S.ProjectHeader>
                <S.Category>{selectedProject.category}</S.Category>
                {formatPeriod(
                  selectedProject.startDate,
                  selectedProject.endDate
                )}
              </S.ProjectHeader>

              <S.ModalTitle>{selectedProject.title}</S.ModalTitle>
              {selectedProject.team && (
                <S.ProjectTeam>{selectedProject.team}</S.ProjectTeam>
              )}

              {selectedProject.images && selectedProject.images.length > 0 && (
                <S.ImageContainer>
                  <S.ImageTrack
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                      transform: `translateX(calc(-${
                        currentImageIndex * 100
                      }% - ${dragOffset}px))`,
                    }}
                  >
                    {selectedProject.images.map((image, index) => (
                      <S.ImageSlide key={index}>
                        <img
                          src={image}
                          alt={`${selectedProject.title} ${index + 1}`}
                        />
                      </S.ImageSlide>
                    ))}
                  </S.ImageTrack>

                  {selectedProject.images.length > 1 && (
                    <>
                      <S.ImageNavigation>
                        <S.NavButton onClick={handlePrevImage} className="prev">
                          <MdNavigateBefore />
                        </S.NavButton>
                        <S.NavButton onClick={handleNextImage} className="next">
                          <MdNavigateNext />
                        </S.NavButton>
                      </S.ImageNavigation>
                      <S.ImageIndicator>
                        {selectedProject.images.map((_, idx) => (
                          <S.IndicatorDot
                            key={idx}
                            active={idx === currentImageIndex}
                            onClick={() => setCurrentImageIndex(idx)}
                          />
                        ))}
                      </S.ImageIndicator>
                    </>
                  )}
                </S.ImageContainer>
              )}

              <S.ProjectDescription>
                {selectedProject.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </S.ProjectDescription>

              {selectedProject.url &&
                (selectedProject.url.deprecated ? (
                  <S.DeprecatedUrl>
                    <VscLock />
                    {selectedProject.url.link}
                  </S.DeprecatedUrl>
                ) : (
                  <S.DemoLink
                    href={selectedProject.url.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLinkExternal />
                    {selectedProject.url.link}
                  </S.DemoLink>
                ))}

              <S.SkillsSection>
                <S.SectionTitle>Skills</S.SectionTitle>
                <S.SkillsList>
                  {selectedProject.skills.map((skill) => (
                    <S.SkillItem key={skill}>{skill}</S.SkillItem>
                  ))}
                </S.SkillsList>
              </S.SkillsSection>

              <S.ProjectLinks>
                {selectedProject.links.readme && (
                  <S.LinkButton
                    href={selectedProject.links.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    README
                  </S.LinkButton>
                )}
                {selectedProject.links.github && (
                  <S.LinkButton
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub /> GitHub
                  </S.LinkButton>
                )}
              </S.ProjectLinks>
            </S.ModalBody>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default Projects;
