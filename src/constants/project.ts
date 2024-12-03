import { Project } from "../types/project";
import openmusic from "../assets/images/openmusic.png";
import background from "../assets/images/background.jpg";
import juniorDeveloper from "../assets/images/junior-developer.png";
import solveTitle from "../assets/images/solve-title.png";
import stompilot from "../assets/images/stompilot.png";
import finder from "../assets/images/finder.png";

export const PROJECTS: Project[] = [
  {
    category: "음악 플랫폼",
    startDate: "2024.04",
    endDate: "2024.06",
    title: '사용자가 직접 음악을 올릴 수 있는 음악 플랫폼 "OpenMusic"',
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
    title: '자유롭게 문제를 출제하고 풀 수 있는 코딩 테스트 플랫폼 "Solve"',
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
  {
    category: "Stomp 테스팅 툴",
    startDate: "2024.09",
    title: 'Stomp 프로토콜을 테스트할 수 있는 툴 "Stompilot"',
    description: [
      "Stomp 프로토콜을 사용하는 서비스를 개발하면서 테스트하기 위한 툴이 필요했음",
      "그래서 Stomp 프로토콜을 테스트할 수 있는 툴을 개발하게 됨",
    ],
    thumbnail: stompilot,
    url: {
      link: "https://stompilot.netlify.app",
    },
    team: "개인 프로젝트",
    skills: ["React", "TypeScript", "Electron"],
    links: {
      readme: "https://github.com/jbj338033/stompilot-app#readme",
      github: "https://github.com/jbj338033/stompilot",
    },
  },
  {
    category: "분실물 찾기 서비스",
    startDate: "2024.06",
    title: '분실물을 찾을 수 있는 서비스 "찾죠?ㅋ"',
    description: [
      "분실물을 찾을 수 있는 서비스",
      "분실물을 등록하고 찾을 수 있는 서비스",
      "분실물을 등록할 때 사진을 찍어서 등록할 수 있음",
    ],
    thumbnail: finder,
    url: {
      link: "https://finder.netlify.app",
    },
    team: "동아리 프로젝트",
    skills: ["Spring Boot", "JPA", "MySQL"],
    links: {
      readme: "https://github.com/Team-Able/finder-server#readme",
      github: "https://github.com/Team-Able/finder-server",
    },
  },
];
