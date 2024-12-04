import { useState, useCallback, useEffect } from "react";
import * as S from "./style";
import { BsGithub, BsStarFill } from "react-icons/bs";
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

  // 터치/키보드 핸들러들은 동일하게 유지...
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
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
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

  return (
    <S.Background id="projects">
      <S.Container>
        <S.TitleWrapper>
          <S.Title>Projects</S.Title>
        </S.TitleWrapper>

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
                    <S.FeaturedBadge>
                      <BsStarFill />
                      Featured
                    </S.FeaturedBadge>
                    <S.ProjectImage
                      src={project.thumbnail}
                      alt={project.title}
                    />
                    <S.ProjectContent>
                      <S.ProjectHeader>
                        <S.Category>{project.category}</S.Category>
                        <S.Period>
                          <SlCalender />
                          {project.startDate} ~{" "}
                          {project.endDate || (
                            <S.OngoingText>진행중</S.OngoingText>
                          )}
                        </S.Period>
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
                        <S.Period>
                          <SlCalender />
                          {project.startDate} ~{" "}
                          {project.endDate || (
                            <S.OngoingText>진행중</S.OngoingText>
                          )}
                        </S.Period>
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
              </S.ProjectsGrid>
            </S.ProjectsSection>
          )}
        </S.Content>

        {selectedProject && (
          <S.Modal onClick={() => setSelectedProject(null)}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
              <S.CloseButton onClick={() => setSelectedProject(null)}>
                <IoClose />
              </S.CloseButton>

              <S.ModalBody>
                <S.ProjectHeader>
                  <S.Category>{selectedProject.category}</S.Category>
                  <S.Period>
                    <SlCalender />
                    {selectedProject.startDate} ~{" "}
                    {selectedProject.endDate || (
                      <S.OngoingText>진행중</S.OngoingText>
                    )}
                  </S.Period>
                </S.ProjectHeader>

                <div>
                  <S.ModalTitle>{selectedProject.title}</S.ModalTitle>
                  {selectedProject.team && (
                    <S.ProjectTeam>{selectedProject.team}</S.ProjectTeam>
                  )}

                  {selectedProject.images &&
                    selectedProject.images.length > 0 && (
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
                              <S.NavButton
                                className="prev"
                                onClick={handlePrevImage}
                              >
                                <MdNavigateBefore />
                              </S.NavButton>
                              <S.NavButton
                                className="next"
                                onClick={handleNextImage}
                              >
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
                </div>

                <S.ProjectDescription>
                  {selectedProject.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </S.ProjectDescription>

                {selectedProject.url && (
                  <div>
                    {selectedProject.url.deprecated ? (
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
                    )}
                  </div>
                )}

                <S.SkillsSection>
                  <S.SectionTitle>Skills & Technologies</S.SectionTitle>
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
    </S.Background>
  );
};

export default Projects;
