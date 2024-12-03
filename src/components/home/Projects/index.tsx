import * as S from "./style";
import { BsLink45Deg, BsGithub, BsStarFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { VscLock } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { Project } from "../../../types/project";
import { PROJECTS } from "../../../constants/project";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const regularProjects = PROJECTS.filter((p) => !p.featured);

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

  const formatPeriod = (startDate: string, endDate?: string) => {
    if (!endDate) {
      return (
        <S.Period>
          <SlCalender />
          {startDate} ~ <S.OngoingText>진행중</S.OngoingText>
        </S.Period>
      );
    }
    return (
      <S.Period>
        <SlCalender />
        {startDate} ~ {endDate}
      </S.Period>
    );
  };

  const handleSlideComplete = () => {
    setDragOffset(0);
  };

  const handlePrevImage = () => {
    if (!selectedProject?.images || isDragging) return;

    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images!.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!selectedProject?.images || isDragging) return;

    setCurrentImageIndex((prev) =>
      prev === selectedProject.images!.length - 1 ? 0 : prev + 1
    );
  };

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

  const handleKeyPress = (e: KeyboardEvent) => {
    if (!selectedProject) return;
    if (e.key === "ArrowLeft") handlePrevImage();
    if (e.key === "ArrowRight") handleNextImage();
    if (e.key === "Escape") setSelectedProject(null);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress, selectedProject]);

  const renderProjectCard = (project: Project, isMain = false) => (
    <S.ProjectCard
      onClick={() => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
      }}
    >
      {project.featured && !isMain && (
        <S.FeaturedBadge>
          <BsStarFill />
          대표작
        </S.FeaturedBadge>
      )}
      <div className="image-section">
        {project.thumbnail && (
          <S.ImageContainer>
            <S.ProjectImage
              src={project.thumbnail}
              alt={project.title}
              style={{ transform: "scale(1)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </S.ImageContainer>
        )}
      </div>

      <div className="content-section">
        <S.ProjectHeader>
          <S.Category>{project.category}</S.Category>
          {formatPeriod(project.startDate, project.endDate)}
        </S.ProjectHeader>

        <S.ProjectTitle>{project.title}</S.ProjectTitle>

        <S.DescriptionList>
          {project.description.slice(0, isMain ? 3 : 2).map((desc, i) => (
            <S.DescriptionItem key={i}>{desc}</S.DescriptionItem>
          ))}
          {!isMain && project.description.length > 2 && (
            <S.DescriptionItem>더보기...</S.DescriptionItem>
          )}
        </S.DescriptionList>

        <S.SkillsList>
          {project.skills.slice(0, isMain ? 6 : 4).map((skill) => (
            <S.SkillItem key={skill}>{skill}</S.SkillItem>
          ))}
          {!isMain && project.skills.length > 4 && (
            <S.SkillItem>+{project.skills.length - 4}</S.SkillItem>
          )}
        </S.SkillsList>
      </div>
    </S.ProjectCard>
  );

  return (
    <S.Container id="projects">
      <S.TitleWrapper>
        <BsLink45Deg />
        <S.Title>PROJECTS</S.Title>
      </S.TitleWrapper>

      <S.GridContainer>
        {featuredProjects[0] && (
          <S.MainProject>
            {renderProjectCard(featuredProjects[0], true)}
          </S.MainProject>
        )}

        <S.ProjectsGrid>
          {[...featuredProjects.slice(1), ...regularProjects].map(
            (project, index) => (
              <div key={index}>{renderProjectCard(project)}</div>
            )
          )}
        </S.ProjectsGrid>
      </S.GridContainer>

      {selectedProject && (
        <S.Modal onClick={() => setSelectedProject(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setSelectedProject(null)}>
              <IoClose />
            </S.CloseButton>

            <S.ModalInner>
              <S.ModalHeader>
                <S.ProjectHeader>
                  <S.Category>{selectedProject.category}</S.Category>
                  {formatPeriod(
                    selectedProject.startDate,
                    selectedProject.endDate
                  )}
                </S.ProjectHeader>

                <S.ModalTitle>{selectedProject.title}</S.ModalTitle>
                <S.ModalTeam>{selectedProject.team}</S.ModalTeam>
              </S.ModalHeader>

              {selectedProject.images && selectedProject.images.length > 0 && (
                <S.ModalImageContainer>
                  <S.ImageTrack
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                      transform: `translateX(calc(-${
                        currentImageIndex * 100
                      }% - ${dragOffset}px))`,
                    }}
                    onTransitionEnd={handleSlideComplete}
                  >
                    {selectedProject.images.map((image, index) => (
                      <S.ImageSlide key={index}>
                        <S.ModalImage
                          src={image}
                          alt={`${selectedProject.title} ${index + 1}`}
                        />
                      </S.ImageSlide>
                    ))}
                  </S.ImageTrack>

                  {selectedProject.images.length > 1 && (
                    <>
                      <S.ImageNavButton
                        className="prev"
                        onClick={handlePrevImage}
                      >
                        <MdNavigateBefore />
                      </S.ImageNavButton>
                      <S.ImageNavButton
                        className="next"
                        onClick={handleNextImage}
                      >
                        <MdNavigateNext />
                      </S.ImageNavButton>
                      <S.ImageNav>
                        {selectedProject.images.map((_, idx) => (
                          <S.ImageDot
                            key={idx}
                            active={idx === currentImageIndex}
                            onClick={() => {
                              if (idx === currentImageIndex) return;
                              setCurrentImageIndex(idx);
                            }}
                          />
                        ))}
                      </S.ImageNav>
                    </>
                  )}
                </S.ModalImageContainer>
              )}

              <S.ModalDescription>
                {selectedProject.description.map((desc, i) => (
                  <S.DescriptionItem key={i}>{desc}</S.DescriptionItem>
                ))}
              </S.ModalDescription>

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

              <S.ModalSkillsSection>
                <S.SubTitle>Skills & Technologies</S.SubTitle>
                <S.SkillsList>
                  {selectedProject.skills.map((skill) => (
                    <S.SkillItem key={skill}>{skill}</S.SkillItem>
                  ))}
                </S.SkillsList>
              </S.ModalSkillsSection>

              <S.ModalLinks>
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
              </S.ModalLinks>
            </S.ModalInner>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default Projects;
