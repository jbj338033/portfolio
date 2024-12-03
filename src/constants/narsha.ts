import { NarshaProject } from "../types/narsha";

export const NARSHA_PROJECTS: NarshaProject[] = [
  {
    id: 1,
    title: "2024 나르샤 프로젝트",
    description: "2024년도 나르샤 프로젝트 활동 내역입니다.",
    period: "2024.08 - 2024.12",
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
        date: "2024.08.27",
        title: "기술 스택 조사",
        summary: "프로젝트에 사용할 기술 스택 조사",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "백엔드 기술 스택",
            description: ["Node.js, Express.js, Socket.io, Typescript, Axios"],
          },
          {
            title: "프론트엔드 기술 스택",
            description: [
              "React.js, TypeScript, Tailwind CSS, Axios, Vite, Framer Motion, React Icons, React Intersection Observer",
              "UI/UX 디자인",
            ],
          },
          {
            title: "디자인 기술 스택",
            description: ["Figma"],
          },
          {
            title: "협업 도구",
            description: ["Discord, KakaoWork, GitHub"],
          },
        ],
        achievement: "기술 스택 선정 및 프로젝트 초기 세팅 완료",
        nextPlan: "프로젝트 초기 구조 설계",
      },
      {
        id: 3,
        week: 3,
        date: "2024.09.03",
        title: "기능명세서 작성",
        summary: "프로젝트 기능명세서 작성",
        teamMembers: ["이동휘", "신지윤", "권동우", "강건", "전민오"],
        contents: [
          {
            title: "기능명세서 작성",
            description: [
              "화상 채팅 기능명세서 작성",
              "화상 채팅방 목록 기능명세서 작성",
              "화상 채팅방 생성 기능명세서 작성",
              "화상 채팅방 입장 기능명세서 작성",
            ],
          },
        ],
        achievement: "기능명세서 작성 완료",
        nextPlan: "디자인 회의 및 디자인 작업",
      },
      // 디자인 회의
      {
        id: 4,
        week: 4,
        date: "2024.09.10",
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
      // 깃허브 프로젝트 생성과 디자인 검토
      {
        id: 5,
        week: 5,
        date: "2024.09.17",
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
      // 뷰 구현
      {
        id: 6,
        week: 6,
        date: "2024.09.24",
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
      // 서버 배포 시작
      {
        id: 7,
        week: 7,
        date: "2024.10.01",
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
      // 더 많은 뷰 구현과 서버 개발 및 배포 완료
      {
        id: 8,
        week: 8,
        date: "2024.10.08",
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
      // UI/UX 디자인 수정 및 서버 배포
      {
        id: 9,
        week: 9,
        date: "2024.10.15",
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
      // 코드를 merge하는 과정에서 충돌이 발생하여 해결하는 과정
      {
        id: 10,
        week: 10,
        date: "2024.10.22",
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
      // 프로젝트 마무리
      {
        id: 11,
        week: 11,
        date: "2024.10.29",
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
];
