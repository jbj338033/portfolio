import { NarshaProject } from "../types/narsha";

export const NARSHA_PROJECTS: NarshaProject[] = [
  {
    id: 1,
    title: "2024 나르샤 프로젝트",
    description: "2024년도 나르샤 프로젝트 활동 내역입니다.",
    period: "2024.08 - 2024.12",
    status: "completed",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Socket.io",
      "Tailwind CSS",
    ],
    teamSize: 5,
    entries: [
      {
        id: 1,
        week: 1,
        date: "2024.08.20",
        title: "프로젝트 아이디어 회의",
        summary: "프로젝트 주제 선정",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "역할 분담",
            description: [
              "백엔드 2명, 프론트엔드 3명으로 역할 분담",
              "협업 규칙 및 코딩 컨벤션 설정",
              "Git 브랜치 전략 수립",
            ],
          },
        ],
        achievement: "랜덤 화상 채팅을 주제로 최종 결정",
        nextPlan: "기술 스택 조사 및 선정",
      },
      {
        id: 2,
        week: 2,
        date: "2024.09.03",
        title: "기술 스택 조사",
        summary: "기술 스택 조사 및 선정",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "기술 스택 조사",
            description: [
              "React.js, TypeScript, Node.js, Express, Socket.io, Tailwind CSS",
            ],
          },
        ],
        achievement: "기술 스택 선정",
        nextPlan: "기능명세서 작성",
      },
      {
        id: 3,
        week: 3,
        date: "2024.09.10",
        title: "기능명세서 작성",
        summary: "기능명세서 작성",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "기능명세서 작성",
            description: ["화상 채팅방 목록", "화상 채팅방", "화상 채팅"],
          },
        ],
        achievement: "기능명세서 작성 완료",
        nextPlan: "디자인 회의",
      },
      {
        id: 4,
        week: 4,
        date: "2024.09.24",
        title: "디자인 회의",
        summary: "프로젝트 디자인 회의",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "UI/UX 디자인",
            description: [
              "화상 채팅방 목록 디자인",
              "화상 채팅방 디자인",
              "화상 채팅 디자인",
            ],
          },
        ],
        achievement: "UI/UX 디자인 완료",
        nextPlan: "깃허브 프로젝트 생성 및 초기 커밋과 디자인 검토",
      },
      {
        id: 5,
        week: 5,
        date: "2024.10.15",
        title: "깃허브 프로젝트 생성",
        summary: "깃허브 프로젝트 생성 및 초기 커밋",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "깃허브 프로젝트 생성",
            description: ["깃허브 프로젝트 생성", "깃허브 프로젝트 초기 커밋"],
          },
        ],
        achievement: "깃허브 프로젝트 생성 및 초기 커밋 완료",
        nextPlan: "뷰 구현",
      },
      {
        id: 6,
        week: 6,
        date: "2024.10.22",
        title: "뷰 구현",
        summary: "화상 채팅방 목록 뷰 구현",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "화상 채팅방 목록 뷰 구현",
            description: ["화상 채팅방 목록 뷰 구현"],
          },
        ],
        achievement: "화상 채팅방 목록 뷰 구현 완료",
        nextPlan: "화상 채팅방 뷰 구현",
      },
      {
        id: 7,
        week: 7,
        date: "2024.10.29",
        title: "서버 배포 시작",
        summary: "서버 배포 시작",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "서버 배포 시작",
            description: ["서버 배포 시작"],
          },
        ],
        achievement: "서버 배포 시작",
        nextPlan: "더 많은 뷰 구현과 서버 개발",
      },
      {
        id: 8,
        week: 8,
        date: "2024.11.05",
        title: "뷰 구현 및 서버 개발",
        summary: "화상 채팅방 뷰 구현 및 서버 개발",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "화상 채팅방 뷰 구현",
            description: ["화상 채팅방 뷰 구현"],
          },
          {
            title: "서버 개발",
            description: ["서버 개발"],
          },
        ],
        achievement: "화상 채팅방 뷰 구현 및 서버 개발 완료",
        nextPlan: "UI/UX 디자인 수정 및 서버 배포",
      },
      {
        id: 9,
        week: 9,
        date: "2024.11.12",
        title: "UI/UX 디자인 수정 및 서버 배포",
        summary: "UI/UX 디자인 수정 및 서버 배포",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "UI/UX 디자인 수정",
            description: ["UI/UX 디자인 수정"],
          },
          {
            title: "서버 배포",
            description: ["서버 배포"],
          },
        ],
        achievement: "UI/UX 디자인 수정 및 서버 배포 완료",
        nextPlan: "프로젝트 마무리",
      },
      {
        id: 10,
        week: 10,
        date: "2024.11.19",
        title: "코드 충돌 해결",
        summary: "코드 충돌 해결",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "코드 충돌 해결",
            description: ["코드 충돌 해결"],
          },
        ],
        achievement: "코드 충돌 해결",
        nextPlan: "프로젝트 마무리",
      },
      {
        id: 11,
        week: 11,
        date: "2024.10.26",
        title: "프로젝트 마무리",
        summary: "프로젝트 마무리",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "프로젝트 마무리",
            description: ["프로젝트 마무리"],
          },
        ],
        achievement: "프로젝트 마무리",
        nextPlan: "프로젝트 발표",
      },
    ],
  },
  {
    id: 2,
    title: "2025 나르샤 프로젝트",
    description: "2025년도 나르샤 프로젝트 활동 내역입니다.",
    period: "2025.01 - 2025.12",
    status: "ongoing",
    techStack: [],
    teamSize: 0,
    entries: [
      {
        id: 1,
        week: 0,
        date: "2025.01.01",
        title: "팀 구성 및 프로젝트 주제 선정",
        teamMembers: [],
        achievement: "",
        nextPlan: "",
        summary: "팀 구성 및 프로젝트 주제 선정",
        tags: ["팀 구성", "프로젝트 주제 선정"],
        contents: [
          {
            title: "팀 구성",
            description: ["팀원 모집 및 팀 구성", "프로젝트 주제 선정"],
          },
        ],
      },
    ],
  },
];
