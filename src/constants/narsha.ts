import { NarshaEntry } from "../types/narsha";

export const NARSHA_ENTRIES: NarshaEntry[] = [
  {
    id: 1,
    week: 1,
    date: "2024.03.15 - 2024.03.21",
    title: "프로젝트 아이디어 회의",
    summary: "팀 구성 및 프로젝트 주제 선정",
    teamMembers: ["김철수", "이영희", "박지민"],
    contents: [
      {
        title: "팀 구성 및 역할 분담",
        description: [
          "백엔드 2명, 프론트엔드 1명으로 역할 분담",
          "협업 규칙 및 코딩 컨벤션 설정",
          "Git 브랜치 전략 수립",
        ],
      },
    ],
    achievement: "음악 공유 플랫폼 주제로 최종 결정",
    nextPlan: "기술 스택 조사 및 선정",
  },
  {
    id: 2,
    week: 2,
    date: "2024.03.22 - 2024.03.28",
    title: "기술 스택 조사",
    summary: "프로젝트에 사용할 기술 스택 조사",
    teamMembers: ["김철수", "이영희", "박지민"],
    contents: [
      {
        title: "백엔드 기술 스택",
        description: [
          "Node.js, Express.js, Prisma, MySQL",
          "REST API 설계 및 구현",
        ],
      },
      {
        title: "프론트엔드 기술 스택",
        description: [
          "React.js, TypeScript, Styled-components",
          "UI/UX 디자인",
        ],
      },
    ],
    achievement: "기술 스택 선정 및 프로젝트 초기 세팅 완료",
    nextPlan: "프로젝트 초기 구조 설계",
  },
];
