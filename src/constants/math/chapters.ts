import { MathChapter } from "../../types/math";

export const MATH_CHAPTERS: MathChapter[] = [
  {
    id: "polynomial",
    title: "다항식",
    isCompleted: true,
    sections: [
      {
        id: "operations",
        number: "1.1",
        title: "다항식의 연산",
      },
      {
        id: "identity-remainder",
        number: "1.2",
        title: "항등식과 나머지정리",
      },
      {
        id: "factorization",
        number: "1.3",
        title: "인수분해",
      },
    ],
  },
  {
    id: "equation",
    title: "방정식과 부등식",
    isCompleted: false,
    sections: [
      {
        id: "complex-numbers",
        number: "2.1",
        title: "복소수와 그 연산",
      },
      {
        id: "discriminant",
        number: "2.2",
        title: "이차방정식의 판별식",
      },
      {
        id: "roots-coefficients",
        number: "2.3",
        title: "이차방정식의 근과 계수의 관계",
      },
      {
        id: "quadratic-function",
        number: "2.4",
        title: "이차방정식과 이차함수의 관계",
      },
      {
        id: "max-min",
        number: "2.5",
        title: "이차함수의 최대, 최소",
      },
      {
        id: "higher-equations",
        number: "2.6",
        title: "삼차방정식과 사차방정식",
      },
      {
        id: "system-quadratic",
        number: "2.7",
        title: "연립이차방정식",
      },
      {
        id: "system-linear-inequality",
        number: "2.8",
        title: "연립일차부등식",
      },
      {
        id: "quadratic-inequality",
        number: "2.9",
        title: "이차부등식과 연립이차부등식",
      },
    ],
  },
  {
    id: "geometry",
    title: "도형의 방정식",
    isCompleted: false,
    sections: [
      {
        id: "distance",
        number: "3.1",
        title: "두 점 사이의 거리",
      },
      {
        id: "division",
        number: "3.2",
        title: "선분의 내분과 외분",
      },
      {
        id: "line",
        number: "3.3",
        title: "직선의 방정식",
      },
      {
        id: "parallel-perpendicular",
        number: "3.4",
        title: "두 직선의 평행과 수직",
      },
      {
        id: "circle",
        number: "3.5",
        title: "원의 방정식",
      },
      {
        id: "line-circle",
        number: "3.6",
        title: "원과 직선의 위치 관계",
      },
      {
        id: "translation",
        number: "3.7",
        title: "평행이동",
      },
      {
        id: "symmetry",
        number: "3.8",
        title: "대칭이동",
      },
    ],
  },
  {
    id: "set-proposition",
    title: "집합과 명제",
    isCompleted: false,
    sections: [
      {
        id: "set-basic",
        number: "4.1",
        title: "집합의 뜻과 포함 관계",
      },
      {
        id: "set-operations",
        number: "4.2",
        title: "집합의 연산",
      },
      {
        id: "proposition-condition",
        number: "4.3",
        title: "명제와 조건",
      },
      {
        id: "proposition-relations",
        number: "4.4",
        title: "명제 사이의 관계",
      },
      {
        id: "proof",
        number: "4.5",
        title: "명제의 증명과 절대부등식의 증명",
      },
    ],
  },
  {
    id: "function",
    title: "함수",
    isCompleted: false,
    sections: [
      {
        id: "function-basic",
        number: "5.1",
        title: "함수의 뜻과 그래프",
      },
      {
        id: "composition",
        number: "5.2",
        title: "합성함수",
      },
      {
        id: "inverse",
        number: "5.3",
        title: "역함수",
      },
      {
        id: "rational",
        number: "5.4",
        title: "유리함수",
      },
      {
        id: "irrational",
        number: "5.5",
        title: "무리함수",
      },
    ],
  },
  {
    id: "combination",
    title: "경우의 수",
    isCompleted: false,
    sections: [
      {
        id: "counting",
        number: "6.1",
        title: "경우의 수",
      },
      {
        id: "permutation",
        number: "6.2",
        title: "순열",
      },
      {
        id: "combination",
        number: "6.3",
        title: "조합",
      },
    ],
  },
];
