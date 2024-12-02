import * as S from "./style";
import { BsLink45Deg, BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { VscLock } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";

interface Project {
  category: string;
  startDate: string;
  endDate?: string;
  title: string;
  description: string[];
  url?: {
    link: string;
    deprecated?: boolean;
  };
  team: string;
  skills: string[];
  links: {
    readme?: string;
    github?: string;
  };
}

const PROJECTS: Project[] = [
  {
    category: "음악 플랫폼",
    startDate: "2024.04",
    endDate: "2024.06",
    title: "사용자가 직접 음악을 올릴 수 있는 음악 플랫폼",
    description: [
      "전반적인 백엔드 개발",
      "Google Cloud Platform을 사용하여 서버 배포 및 관리",
      "AWS S3를 사용하여 음악 파일 저장 및 관리",
      "JDA를 사용하여 에러 로깅 및 모니터링",
    ],
    url: {
      link: "https://openmusic.kr",
      deprecated: true,
    },
    team: "6인 팀 프로젝트",
    skills: ["Spring Boot", "JPA", "MySQL", "QueryDSL", "JWT", "JDA"],
    links: {
      readme: "https://github.com/Open3r/openmusic-server",
    },
  },
  {
    category: "코딩 테스트 플랫폼",
    startDate: "2024.10",
    title: "자유롭게 문제를 출제하고 풀 수 있는 코딩 테스트 플랫폼",
    description: [
      "학교에서 1학년 대상으로 코딩 테스트를 진행하려고 함",
      "백준과 같은 사이트는 직접 문제를 출제하기가 까다로움",
      "그래서 직접 문제를 출제하고 풀 수 있는 플랫폼을 만들어보자는 취지",
    ],
    url: {
      link: "https://solve.kr",
    },
    team: "5인 팀 프로젝트",
    skills: ["Spring Boot", "Docker", "JPA", "QueryDSL", "MySQL", "GCP"],
    links: {
      readme: "https://github.com/NameOfTeam/solve-server#readme",
      github: "https://github.com/NameOfTeam/solve-server",
    },
  },
];

const Projects = () => {
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

  return (
    <S.Container id="projects">
      <S.TitleWrapper>
        <BsLink45Deg />
        <S.Title>PROJECTS</S.Title>
      </S.TitleWrapper>
      <S.Content>
        {PROJECTS.map((project, index) => (
          <S.ProjectCard key={index}>
            <div>
              <S.ProjectHeader>
                <S.Category>{project.category}</S.Category>
                {formatPeriod(project.startDate, project.endDate)}
              </S.ProjectHeader>

              <S.ProjectTitle>{project.title}</S.ProjectTitle>

              <S.DescriptionList>
                {project.description.map((desc, i) => (
                  <S.DescriptionItem key={i}>{desc}</S.DescriptionItem>
                ))}
              </S.DescriptionList>

              {project.url &&
                (project.url.deprecated ? (
                  <S.DeprecatedUrlText>
                    <VscLock />
                    {project.url.link}
                  </S.DeprecatedUrlText>
                ) : (
                  <S.DemoLink
                    href={project.url.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLinkExternal />
                    {project.url.link}
                  </S.DemoLink>
                ))}
            </div>

            <S.ProjectFooter>
              <S.SkillsList>
                {project.skills.map((skill) => (
                  <S.SkillItem key={skill}>{skill}</S.SkillItem>
                ))}
              </S.SkillsList>

              <S.LinksWrapper>
                {project.links.readme && (
                  <S.LinkButton
                    href={project.links.readme}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    README
                  </S.LinkButton>
                )}
                {project.links.github && (
                  <S.LinkButton
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub /> GitHub
                  </S.LinkButton>
                )}
              </S.LinksWrapper>
            </S.ProjectFooter>
          </S.ProjectCard>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Projects;
