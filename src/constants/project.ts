import { Project } from "../types/project";
import openmusic from "../assets/images/openmusic.png";
import background from "../assets/images/background.jpg";
import juniorDeveloper from "../assets/images/junior-developer.png";
import solveTitle from "../assets/images/solve-title.png";

export const PROJECTS: Project[] = [
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
    thumbnail: openmusic,
    images: [openmusic, background, juniorDeveloper],
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
    thumbnail: solveTitle,
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
