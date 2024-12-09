import { BiCodeAlt } from "react-icons/bi";
import { TechCategory } from "../types/tech";
import { FaLaptopCode } from "react-icons/fa";
import { HiServer } from "react-icons/hi";
import { AiOutlineCloud } from "react-icons/ai";

export const TECH_STACK: Record<string, TechCategory> = {
  "Programming Language": {
    icon: <BiCodeAlt />,
    items: [
      {
        name: "TypeScript",
        color: "#3178C6",
        level: 4,
        experience: "1년",
        description: [
          "타입 시스템을 활용한 안전한 코드 작성",
          "인터페이스와 제네릭을 활용한 재사용 가능한 컴포넌트 설계",
          "타입 가드를 활용한 런타임 타입 안전성 확보",
        ],
      },
      {
        name: "Kotlin",
        color: "#7F52FF",
        level: 4,
        experience: "1년",
        description: [
          "코틀린의 null 안전성을 활용한 안정적인 코드 작성",
          "코루틴을 활용한 비동기 프로그래밍",
          "Spring Boot와 함께 사용하여 백엔드 서버 개발",
        ],
      },
      {
        name: "Python",
        color: "#3776AB",
        level: 3,
        experience: "1년",
        description: [
          "데이터 분석 및 시각화 라이브러리(Pandas, Matplotlib) 활용",
          "Baekjoon, LeetCode 등 알고리즘 문제 풀이",
          "PyTorch를 활용한 딥러닝 모델 구현",
        ],
      },
    ],
  },
  Frontend: {
    icon: <FaLaptopCode />,
    items: [
      {
        name: "React",
        color: "#61DAFB",
        level: 4,
        experience: "1년",
        description: [
          "함수형 컴포넌트와 훅을 활용한 UI 개발",
          "상태 관리 라이브러리(Zustand, React-Query) 활용",
          "성능 최적화 및 메모이제이션 적용",
        ],
      },
      {
        name: "Next.js",
        color: "#000000",
        level: 3,
        experience: "6개월",
        description: [
          "SSR과 SSG를 활용한 성능 최적화",
          "API 라우트를 활용한 백엔드 통신",
          "동적 라우팅 구현",
        ],
      },
      {
        name: "Emotion",
        color: "#DB7093",
        level: 3,
        experience: "6개월",
        description: [
          "CSS-in-JS 라이브러리를 활용한 스타일링",
          "테마와 글로벌 스타일링 적용",
          "반응형 디자인 구현",
        ],
      },
      {
        name: "Tailwind CSS",
        color: "#38B2AC",
        level: 3,
        experience: "6개월",
        description: [
          "Utility-first CSS 프레임워크를 활용한 스타일링",
          "커스텀 테마 및 구성 요소 제작",
          "반응형 디자인 구현",
        ],
      },
      {
        name: "Zustand",
        color: "#000000",
        level: 3,
        experience: "6개월",
        description: [
          "React 상태 관리 라이브러리",
          "Immer를 활용한 불변성 관리",
          "상태 전역 관리 및 비동기 처리",
        ],
      },
      {
        name: "React Query",
        color: "#000000",
        level: 3,
        experience: "6개월",
        description: [
          "API 데이터 캐싱 및 상태 관리",
          "쿼리 캐시를 활용한 데이터 최신화",
          "뮤테이션을 활용한 데이터 수정",
        ],
      },
      {
        name: "Flutter",
        color: "#02569B",
        level: 2,
        experience: "6개월",
        description: [
          "모바일 앱 개발을 위한 프레임워크",
          "Dart 언어를 활용한 개발",
          "Material Design을 준수한 UI 개발",
        ],
      },
    ],
  },
  Backend: {
    icon: <HiServer />,
    items: [
      {
        name: "Spring Boot",
        color: "#6DB33F",
        level: 4,
        experience: "1년",
        description: [
          "RESTful API 설계 및 구현",
          "Spring Security를 활용한 인증/인가 구현",
          "JPA를 활용한 데이터베이스 연동",
        ],
      },
      {
        name: "MySQL",
        color: "#4479A1",
        level: 3,
        experience: "1년",
        description: [
          "데이터베이스 설계 및 모델링",
          "인덱스를 활용한 쿼리 최적화",
          "트랜잭션 관리",
        ],
      },
      {
        name: "MongoDB",
        color: "#47A248",
        level: 3,
        experience: "6개월",
        description: [
          "NoSQL 데이터베이스 설계 및 모델링",
          "인덱스를 활용한 쿼리 최적화",
          "몽고 셸을 활용한 데이터 관리",
          "채팅 서버에 사용한 경험이 있습니다.",
        ],
      },
      {
        name: "Express",
        color: "#000000",
        level: 3,
        experience: "6개월",
        description: [
          "화상 채팅 서버 구현",
          "RESTful API 설계 및 구현",
          "Socket.io를 활용한 실시간 통신",
          "WebRTC를 활용한 화상 채팅 구현",
          "OpenVidu를 활용한 화상 채팅 구현",
        ],
      },
    ],
  },
  DevOps: {
    icon: <AiOutlineCloud />,
    items: [
      {
        name: "AWS",
        color: "#FF9900",
        level: 3,
        experience: "6개월",
        description: [
          "EC2를 활용한 서버 배포",
          "S3를 활용한 정적 파일 관리",
          "RDS를 활용한 데이터베이스 운영",
        ],
      },
      {
        name: "Docker",
        color: "#2496ED",
        level: 3,
        experience: "6개월",
        description: [
          "컨테이너화를 통한 애플리케이션 배포",
          "Docker Compose를 활용한 개발 환경 구성",
          "멀티 스테이지 빌드를 통한 이미지 최적화",
        ],
      },
      {
        name: "Jenkins",
        color: "#D24939",
        level: 3,
        experience: "6개월",
        description: [
          "CI/CD 파이프라인 구축",
          "젠킨스 파이프라인 구성",
          "Docker와 Jenkins를 연동한 빌드 자동화",
        ],
      },
      {
        name: "Nginx",
        color: "#269539",
        level: 3,
        experience: "6개월",
        description: [
          "리버스 프록시를 활용한 로드 밸런싱",
          "SSL 인증서를 적용한 HTTPS 설정",
          "Nginx 설정 파일을 통한 서버 설정",
        ],
      },
    ],
  },
};
