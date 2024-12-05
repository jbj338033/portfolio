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
    ],
  },
};
