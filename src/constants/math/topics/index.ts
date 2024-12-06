import { ALL_EQUATION_TOPICS } from "./equation";
import { ALL_FUNCTION_TOPICS } from "./function";
import { ALL_GEOMETRY_TOPICS } from "./geometry";
import { ALL_POLYNOMIAL_TOPICS } from "./polynomial";
import { ALL_PROBABILITY_TOPICS } from "./probability";
import { ALL_SET_TOPICS } from "./set";

export const ALL_MATH_TOPICS = [
  ...ALL_POLYNOMIAL_TOPICS,
  ...ALL_EQUATION_TOPICS,
  ...ALL_GEOMETRY_TOPICS,
  ...ALL_SET_TOPICS,
  ...ALL_FUNCTION_TOPICS,
  ...ALL_PROBABILITY_TOPICS,
];
