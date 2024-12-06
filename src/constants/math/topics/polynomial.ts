import { MathTopic } from "../../../types/math";

export const POLYNOMIAL_TOPICS: MathTopic[] = [
  {
    id: "operations",
    chapter: "polynomial",
    section: 1,
    title: "다항식의 연산",
    category: "다항식",
    description: "다항식의 덧셈, 뺄셈, 곱셈, 나눗셈의 기본 연산을 학습합니다.",
    date: "2024-01-01",
    content: `
# 다항식의 연산

## 다항식의 정의
- 단항식들의 합으로 이루어진 식
- 차수: 다항식에서 가장 큰 지수

## 다항식의 덧셈과 뺄셈
- 동류항끼리 계산
- 차수가 같은 항끼리 계산

### 예시
$(3x^2 + 2x - 1) + (2x^2 - x + 4)$
$= 5x^2 + x + 3$

## 다항식의 곱셈
- 분배법칙을 이용
- 각 항을 모두 곱하고 동류항 정리

### 예시
$(2x + 1)(x - 3)$
$= 2x^2 - 6x + x - 3$
$= 2x^2 - 5x - 3$

## 다항식의 나눗셈
- 차수가 높은 항부터 차례로 나눔
- 나머지는 나누는 식의 차수보다 낮음

### 예시
\${x^2 + 2x - 3} ÷ {(x + 1)}$
$= x + 1$ (몫), $-4$ (나머지)
    `,
    keywords: ["다항식", "차수", "동류항", "연산", "나머지"],
    examples: [
      {
        id: "poly-ex1",
        title: "다항식의 덧셈",
        problem:
          "$(2x^3 - 3x^2 + x - 1) + (x^3 + 2x^2 - 2x + 3)$ 을 계산하시오.",
        solution: "$3x^3 - x^2 - x + 2$",
        explanation:
          "1) 동류항끼리 모아서 계산\n2) $2x^3 + x^3 = 3x^3$\n3) $-3x^2 + 2x^2 = -x^2$\n4) $x - 2x = -x$\n5) $-1 + 3 = 2$",
      },
      {
        id: "poly-ex2",
        title: "다항식의 곱셈",
        problem: "$(x + 2)(x^2 - x + 3)$ 을 전개하시오.",
        solution: "$x^3 - x^2 + 3x + 2x^2 - 2x + 6 = x^3 + x^2 + x + 6$",
        explanation:
          "1) 분배법칙 적용\n2) 앞 항의 x를 뒤 식의 각 항에 곱함\n3) 앞 항의 2를 뒤 식의 각 항에 곱함\n4) 동류항 정리",
      },
    ],
    formulas: [
      {
        id: "poly-form1",
        title: "다항식의 차수",
        formula: "deg$(ax^n + bx^{n-1} + ... + k) = n$",
        description: "다항식에서 가장 큰 지수가 그 다항식의 차수",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "identity-remainder",
    chapter: "polynomial",
    section: 2,
    title: "항등식과 나머지정리",
    category: "다항식",
    description:
      "다항식의 항등식과 나머지정리를 학습하고 이를 활용한 문제해결 방법을 익힙니다.",
    date: "2024-01-03",
    content: `
# 항등식과 나머지정리

## 항등식
- 미지수에 어떤 값을 대입하여도 항상 성립하는 등식
- 양변의 차수와 계수가 같음

### 예시
$(x + a)(x + b) = x^2 + (a+b)x + ab$

## 나머지정리
1. 다항식 $f(x)$를 $x - a$로 나눈 나머지는 $f(a)$이다.
2. 다항식 $f(x)$를 $x - a$로 나누어 떨어지면 $f(a) = 0$이다.

### 인수정리
- $f(a) = 0$이면 $(x - a)$는 $f(x)$의 인수이다.

## 조립제법
1. $ax^3 + bx^2 + cx + d$를 $(x - k)$로 나눌 때
2. 계수 $a, b, c, d$를 차례로 써서 계산

### 예시
$x^3 - 2x^2 - 5x + 6$을 $(x - 3)$으로 나누면?
\`\`\`
         1  -2  -5   6
     ×3  3   3  -6
     ---------------
     1   1  -2   0
\`\`\`
따라서 몫은 $x^2 + x - 2$, 나머지는 $0$
    `,
    keywords: ["항등식", "나머지정리", "인수정리", "조립제법"],
    examples: [
      {
        id: "idr-ex1",
        title: "나머지정리 활용",
        problem:
          "다항식 $f(x) = 2x^3 - x^2 - 4x + 3$을 $x - 1$로 나눈 나머지를 구하시오.",
        solution: "$f(1) = 2(1)^3 - (1)^2 - 4(1) + 3 = 0$",
        explanation: "나머지정리에 의해 $x = 1$을 대입한 값이 나머지가 됨",
      },
      {
        id: "idr-ex2",
        title: "조립제법",
        problem: "$x^3 + 2x^2 - 5x - 6$을 $x + 2$로 나누시오.",
        solution: "몫: $x^2 - 3$, 나머지: $-12$",
        hint: "조립제법에서 $x + 2$로 나눌 때는 $x - (-2)$로 변형하여 계산",
      },
    ],
    formulas: [
      {
        id: "idr-form1",
        title: "나머지정리",
        formula: "나머지 = $f(a)$ $(x - a$로 나눌 때$)$",
        description: "다항식을 일차식으로 나눌 때 나머지 구하는 공식",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "factorization",
    chapter: "polynomial",
    section: 3,
    title: "인수분해",
    category: "다항식",
    description: "다항식의 인수분해 방법과 다양한 공식을 학습합니다.",
    date: "2024-01-05",
    content: `
# 인수분해

## 인수분해의 정의
- 다항식을 두 개 이상의 다항식의 곱으로 나타내는 것
- 전개의 역과정

## 주요 공식
1. 완전제곱식
   - $a^2 ± 2ab + b^2 = (a ± b)^2$
2. 합차공식
   - $a^2 - b^2 = (a+b)(a-b)$
3. 인수분해 공식
   - $acx^2 + (ad+bc)x + bd = (ax+b)(cx+d)$

## 인수분해 방법

### 공통인수로 묶기
$2x^2 + 6x = 2x(x + 3)$

### 치환을 이용한 인수분해
$x^4 + 2x^2 + 1 = (x^2 + 1)^2$
(여기서 $x^2 = t$ 로 치환)

### 그룹으로 묶어 인수분해
$ac{x^2} + ad + bc{x} + bd = (ax+b)(cx+d)$

## 인수분해 순서
1. 공통인수 확인
2. 치환 가능 여부 확인
3. 공식 적용 가능 여부 확인
4. 그룹으로 묶어 시도
    `,
    keywords: ["인수분해", "완전제곱식", "합차공식", "공통인수"],
    examples: [
      {
        id: "fact-ex1",
        title: "완전제곱식",
        problem: "$x^2 + 6x + 9$를 인수분해 하시오.",
        solution: "$(x + 3)^2$",
        explanation: "1) $a^2 + 2ab + b^2$ 꼴\n2) 여기서 $a = x$, $b = 3$",
      },
      {
        id: "fact-ex2",
        title: "복합 인수분해",
        problem: "$x^3 + x^2 - x - 1$을 인수분해 하시오.",
        solution: "$(x^2 + 1)(x - 1)$",
        hint: "인수정리를 이용해 $x = 1$이 근임을 확인",
      },
    ],
    formulas: [
      {
        id: "fact-form1",
        title: "인수분해 공식 모음",
        formula: `
1. $a^2 + 2ab + b^2 = (a + b)^2$
2. $a^2 - 2ab + b^2 = (a - b)^2$
3. $a^2 - b^2 = (a+b)(a-b)$
4. $x^2 + (a+b)x + ab = (x+a)(x+b)$
        `,
        description: "자주 사용되는 인수분해 공식들",
      },
    ],
    difficulty: "기본",
  },
];

export const ALL_POLYNOMIAL_TOPICS = [...POLYNOMIAL_TOPICS];
