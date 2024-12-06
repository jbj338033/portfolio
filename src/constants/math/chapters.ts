import { MathChapter } from "../../types/math";
import { ALL_EQUATION_TOPICS } from "./topics/equation";
import { ALL_FUNCTION_TOPICS } from "./topics/function";
import { ALL_GEOMETRY_TOPICS } from "./topics/geometry";
import { POLYNOMIAL_TOPICS } from "./topics/polynomial";
import { ALL_PROBABILITY_TOPICS } from "./topics/probability";
import { ALL_SET_TOPICS } from "./topics/set";

export const MATH_CHAPTERS: MathChapter[] = [
  {
    id: "polynomial",
    number: 1,
    title: "다항식",
    isCompleted: true,
    topics: POLYNOMIAL_TOPICS,
  },
  {
    id: "equation",
    number: 2,
    title: "방정식과 부등식",
    isCompleted: false,
    topics: ALL_EQUATION_TOPICS,
  },
  {
    id: "geometry",
    number: 3,
    title: "도형의 방정식",
    isCompleted: false,
    topics: ALL_GEOMETRY_TOPICS,
  },
  {
    id: "set-proposition",
    number: 4,
    title: "집합과 명제",
    isCompleted: false,
    topics: ALL_SET_TOPICS,
  },
  {
    id: "function",
    number: 5,
    title: "함수",
    isCompleted: false,
    topics: ALL_FUNCTION_TOPICS,
  },
  {
    id: "combination",
    number: 6,
    title: "경우의 수",
    isCompleted: false,
    topics: ALL_PROBABILITY_TOPICS,
  },
];
