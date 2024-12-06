import { MathTopic } from "../../../types/math";

export const EQUATION_TOPICS_1: MathTopic[] = [
  {
    id: "complex-numbers",
    chapter: "equation",
    section: 1,
    title: "복소수와 그 연산",
    category: "방정식과 부등식",
    description: "복소수의 개념과 사칙연산을 학습합니다.",
    date: "2024-01-08",
    content: `
# 복소수와 그 연산

## 복소수의 정의
- 제곱해서 -1이 되는 수를 허수단위 i라고 정의 (i² = -1)
- 복소수는 a + bi 형태 (a, b는 실수)
- a: 실수부, b: 허수부

## 복소수의 성질
1. i² = -1
2. i³ = -i
3. i⁴ = 1

## 복소수의 사칙연산

### 덧셈과 뺄셈
- (a + bi) ± (c + di) = (a ± c) + (b ± d)i

### 곱셈
- (a + bi)(c + di) = (ac - bd) + (ad + bc)i

### 나눗셈
- \\frac{a + bi}{c + di} = \\frac{(a + bi)(c - di)}{(c + di)(c - di)} = \\frac{ac + bd}{c² + d²} + \\frac{bc - ad}{c² + d²}i

## 켤레복소수
- a + bi의 켤레복소수는 a - bi
- (a + bi)(a - bi) = a² + b²
    `,
    keywords: ["복소수", "허수", "켤레복소수", "사칙연산"],
    examples: [
      {
        id: "complex-ex1",
        title: "복소수의 곱셈",
        problem: "(2 + 3i)(1 - 2i)를 계산하시오.",
        solution: "8 - i",
        explanation:
          "1) (2×1 - 3×(-2)) + (2×(-2) + 3×1)i\n2) (2 + 6) + (-4 + 3)i\n3) 8 - i",
      },
      {
        id: "complex-ex2",
        title: "켤레복소수의 활용",
        problem: "\\frac{1}{2 + i}를 계산하시오.",
        solution: "\\frac{2}{5} - \\frac{1}{5}i",
        explanation: "분모와 분자에 켤레복소수 2 - i를 곱하여 계산",
      },
    ],
    formulas: [
      {
        id: "complex-form1",
        title: "복소수의 기본 성질",
        formula: "i² = -1, i³ = -i, i⁴ = 1",
        description: "허수 i의 거듭제곱 법칙",
      },
      {
        id: "complex-form2",
        title: "켤레복소수의 곱",
        formula: "(a + bi)(a - bi) = a² + b²",
        description: "복소수와 그의 켤레복소수의 곱은 실수",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "discriminant",
    chapter: "equation",
    section: 2,
    title: "이차방정식의 판별식",
    category: "방정식과 부등식",
    description: "이차방정식의 근의 존재성과 판별식의 관계를 학습합니다.",
    date: "2024-01-10",
    content: `
# 이차방정식의 판별식

## 이차방정식의 표준형
- ax² + bx + c = 0 (a ≠ 0)
- 근의 공식: x = \\frac{-b ± \\sqrt{b² - 4ac}}{2a}

## 판별식 D
- D = b² - 4ac
- 판별식의 부호에 따른 근의 종류:
  1. D > 0: 서로 다른 두 실근
  2. D = 0: 중근(같은 두 실근)
  3. D < 0: 서로 다른 두 허근

## 근과 판별식의 관계
1. 실근 조건: D ≥ 0
2. 유리근 조건: D가 완전제곱수
3. 허근 조건: D < 0

## 판별식의 활용
- 상수가 포함된 이차방정식의 근 조건 분석
- 근의 종류 파악
- 계수와 근의 관계 분석
    `,
    keywords: ["판별식", "이차방정식", "근의 공식", "중근"],
    examples: [
      {
        id: "disc-ex1",
        title: "판별식 계산",
        problem: "x² - 2x - 3 = 0의 판별식을 구하고 근의 종류를 판별하시오.",
        solution:
          "D = (-2)² - 4(1)(-3) = 16\n따라서 서로 다른 두 실근을 가진다.",
        explanation:
          "1) a = 1, b = -2, c = -3\n2) D = b² - 4ac = 4 + 12 = 16 > 0",
      },
      {
        id: "disc-ex2",
        title: "근의 존재 조건",
        problem:
          "이차방정식 x² + 2kx + k + 3 = 0이 실근을 가질 조건을 구하시오.",
        solution:
          "k² - (k + 3) ≥ 0\nk² - k - 3 ≥ 0\n(k + 1)(k - 3) ≥ 0\nk ≤ -1 또는 k ≥ 3",
        explanation: "1) a = 1, b = 2k, c = k + 3\n2) D = 4k² - 4(k + 3) ≥ 0",
      },
    ],
    formulas: [
      {
        id: "disc-form1",
        title: "판별식",
        formula: "D = b² - 4ac",
        description: "이차방정식 ax² + bx + c = 0의 판별식",
      },
      {
        id: "disc-form2",
        title: "근의 공식",
        formula: "x = \\frac{-b ± \\sqrt{D}}{2a}",
        description: "판별식을 이용한 이차방정식의 근의 공식",
      },
    ],
    difficulty: "기본",
  },
];

export const EQUATION_TOPICS_2: MathTopic[] = [
  {
    id: "roots-coefficients",
    chapter: "equation",
    section: 3,
    title: "이차방정식의 근과 계수의 관계",
    category: "방정식과 부등식",
    description: "이차방정식의 근과 계수 사이의 관계를 이해하고 활용합니다.",
    date: "2024-01-12",
    content: `
# 이차방정식의 근과 계수의 관계

## 근과 계수의 관계
이차방정식 ax² + bx + c = 0의 두 근을 α, β라 할 때,

1. α + β = -\\frac{b}{a}
2. α × β = \\frac{c}{a}

## 근과 계수의 관계 활용
- 두 근의 합과 곱을 이용한 문제 해결
- 대칭성을 이용한 식의 값 계산
- 새로운 방정식 만들기

### 새로운 방정식 만들기
1. 두 근이 k배인 방정식
2. 두 근이 역수인 방정식
3. 두 근에 상수를 더한 방정식

## 비에타 정리
- 근과 계수의 관계를 이용한 정리
- 방정식의 해를 직접 구하지 않고 식의 값을 계산
    `,
    keywords: ["근과 계수", "비에타 정리", "대칭식"],
    examples: [
      {
        id: "roots-ex1",
        title: "근과 계수 관계 활용",
        problem:
          "이차방정식 2x² - 3x + 1 = 0의 두 근을 α, β라 할 때, α² + β²의 값을 구하시오.",
        solution: "\\frac{9}{4}",
        explanation:
          "1) α + β = \\frac{3}{2}, α × β = \\frac{1}{2}\n2) (α + β)² = (\\frac{3}{2})²\n3) α² + β² = (α + β)² - 2(α × β) = \\frac{9}{4} - 1 = \\frac{9}{4}",
      },
      {
        id: "roots-ex2",
        title: "새로운 방정식",
        problem:
          "이차방정식 x² - 4x + 1 = 0의 두 근의 제곱을 근으로 하는 방정식을 구하시오.",
        solution: "x² - 16x + 1 = 0",
        explanation:
          "1) 원래 방정식의 두 근을 α, β라 하면\n2) 새 방정식의 근은 α², β²\n3) α + β = 4, α × β = 1 이용",
      },
    ],
    formulas: [
      {
        id: "roots-form1",
        title: "근과 계수의 관계",
        formula: "α + β = -\\frac{b}{a}, α × β = \\frac{c}{a}",
        description: "ax² + bx + c = 0의 두 근 α, β에 대한 관계식",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "quadratic-function",
    chapter: "equation",
    section: 4,
    title: "이차방정식과 이차함수의 관계",
    category: "방정식과 부등식",
    description:
      "이차방정식과 이차함수의 관계를 이해하고 그래프를 통해 해를 해석합니다.",
    date: "2024-01-14",
    content: `
# 이차방정식과 이차함수의 관계

## 이차함수의 그래프와 이차방정식의 관계
- y = ax² + bx + c의 그래프와 x축의 교점의 x좌표가 이차방정식 ax² + bx + c = 0의 해

## 판별식과 그래프의 관계
1. D > 0: 그래프와 x축이 두 점에서 만남
2. D = 0: 그래프가 x축에 접함
3. D < 0: 그래프가 x축과 만나지 않음

## 이차함수의 평행이동
1. y = a(x - p)² + q
   - x축 방향으로 p만큼
   - y축 방향으로 q만큼

## 이차함수의 대칭성
- 축의 방정식: x = -\\frac{b}{2a}
- 꼭짓점: (-\\frac{b}{2a}, -\\frac{D}{4a})
    `,
    keywords: ["이차함수", "판별식", "평행이동", "대칭축"],
    examples: [
      {
        id: "quad-ex1",
        title: "이차함수의 그래프와 방정식의 해",
        problem:
          "이차함수 y = x² - 2x - 3의 그래프와 x축의 교점의 좌표를 구하시오.",
        solution: "(-1, 0), (3, 0)",
        explanation:
          "1) x축과의 교점은 y = 0일 때\n2) x² - 2x - 3 = 0 의 해\n3) (x + 1)(x - 3) = 0",
      },
      {
        id: "quad-ex2",
        title: "이차함수의 대칭성",
        problem: "이차함수 y = 2x² - 4x + 1의 대칭축과 꼭짓점을 구하시오.",
        solution: "대칭축: x = 1\n꼭짓점: (1, -1)",
        explanation:
          "1) a = 2, b = -4, c = 1\n2) x = -\\frac{b}{2a} = 1\n3) y = -\\frac{D}{4a} = -1",
      },
    ],
    formulas: [
      {
        id: "quad-form1",
        title: "이차함수의 꼭짓점",
        formula: "(-\\frac{b}{2a}, -\\frac{D}{4a})",
        description: "이차함수 y = ax² + bx + c의 꼭짓점 좌표",
      },
    ],
    difficulty: "기본",
  },
];

export const EQUATION_TOPICS_3: MathTopic[] = [
  {
    id: "max-min",
    chapter: "equation",
    section: 5,
    title: "이차함수의 최대, 최소",
    category: "방정식과 부등식",
    description:
      "이차함수의 최댓값과 최솟값을 구하고 활용하는 방법을 학습합니다.",
    date: "2024-01-16",
    content: `
# 이차함수의 최대, 최소

## 이차함수의 최대, 최소
1. a > 0일 때
   - 아래로 볼록
   - x = -\\frac{b}{2a}에서 최솟값
   - 최솟값: -\\frac{D}{4a}

2. a < 0일 때
   - 위로 볼록
   - x = -\\frac{b}{2a}에서 최댓값
   - 최댓값: -\\frac{D}{4a}

## 최대, 최소 문제 해결 단계
1. 이차함수 식 세우기
2. 계수 a의 부호 확인
3. 대칭축 x = -\\frac{b}{2a} 구하기
4. 최댓값 또는 최솟값 구하기

## 주어진 구간에서의 최대, 최소
1. 구간의 양 끝점 값 구하기
2. 꼭짓점이 구간에 있는지 확인
3. 세 값을 비교하여 최대, 최소 결정
    `,
    keywords: ["이차함수", "최댓값", "최솟값", "구간"],
    examples: [
      {
        id: "maxmin-ex1",
        title: "이차함수의 최솟값",
        problem: "이차함수 y = 2x² - 4x + 3의 최솟값을 구하시오.",
        solution: "1",
        explanation:
          "1) a = 2 > 0이므로 최솟값을 가짐\n2) x = -\\frac{(-4)}{2(2)} = 1\n3) 최솟값 = 2(1)² - 4(1) + 3 = 1",
      },
      {
        id: "maxmin-ex2",
        title: "구간에서의 최대, 최소",
        problem: "y = -x² + 4x - 3의 최댓값을 -1 ≤ x ≤ 3 구간에서 구하시오.",
        solution: "1",
        explanation:
          "1) 꼭짓점 x = 2에서 y = 1\n2) x = -1에서 y = -8\n3) x = 3에서 y = 0\n4) 셋 중 최댓값은 1",
      },
    ],
    formulas: [
      {
        id: "maxmin-form1",
        title: "이차함수의 최댓값/최솟값",
        formula: "-\\frac{D}{4a}",
        description: "이차함수 y = ax² + bx + c의 최댓값 또는 최솟값",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "higher-equations",
    chapter: "equation",
    section: 6,
    title: "삼차방정식과 사차방정식",
    category: "방정식과 부등식",
    description:
      "고차방정식의 풀이법과 인수분해를 통한 해결 방법을 학습합니다.",
    date: "2024-01-18",
    content: `
# 삼차방정식과 사차방정식

## 삼차방정식
- ax³ + bx² + cx + d = 0
- 적어도 하나의 실근을 가짐

### 풀이 방법
1. 인수분해가 가능한 경우
2. 인수정리 활용
3. 치환을 이용한 방법

## 사차방정식
- ax⁴ + bx³ + cx² + dx + e = 0

### 풀이 방법
1. 인수분해
2. 치환 활용
3. 조립제법과 인수정리 활용

## 실근의 개수
- 최고차항의 계수가 양수일 때
- x → ∞ 또는 x → -∞ 에서의 부호 판별
    `,
    keywords: ["삼차방정식", "사차방정식", "인수정리", "치환"],
    examples: [
      {
        id: "higher-ex1",
        title: "삼차방정식",
        problem:
          "x³ - 6x² + 11x - 6 = 0의 한 근이 1일 때, 나머지 근을 구하시오.",
        solution: "2, 3",
        explanation:
          "1) x - 1은 인수\n2) (x - 1)(x² - 5x + 6) = 0\n3) (x - 1)(x - 2)(x - 3) = 0",
      },
      {
        id: "higher-ex2",
        title: "사차방정식",
        problem: "x⁴ - 5x² + 4 = 0을 풀어라.",
        solution: "x = ±1, x = ±2",
        explanation:
          "1) t = x²로 치환\n2) t² - 5t + 4 = 0\n3) (t - 1)(t - 4) = 0",
      },
    ],
    formulas: [
      {
        id: "higher-form1",
        title: "삼차방정식의 근과 계수의 관계",
        formula:
          "α + β + γ = -\\frac{b}{a}, αβ + βγ + γα = \\frac{c}{a}, αβγ = -\\frac{d}{a}",
        description: "ax³ + bx² + cx + d = 0의 세 근 α, β, γ에 대한 관계식",
      },
    ],
    difficulty: "중급",
  },
];

export const EQUATION_TOPICS_4: MathTopic[] = [
  {
    id: "system-quadratic",
    chapter: "equation",
    section: 7,
    title: "연립이차방정식",
    category: "방정식과 부등식",
    description:
      "두 개 이상의 이차방정식으로 이루어진 연립방정식의 해법을 학습합니다.",
    date: "2024-01-20",
    content: `
# 연립이차방정식

## 연립이차방정식의 유형
1. 이차식과 일차식
2. 두 이차식
3. 대칭형 연립방정식

## 주요 해결 방법

### 대입법
1. 한 방정식에서 미지수 정리
2. 다른 방정식에 대입
3. 정리된 방정식 해결

### 가감법
1. 두 방정식의 동류항 정리
2. 적절히 가감하여 미지수 소거
3. 남은 방정식 해결

### 치환법
1. u = x + y, v = xy 등으로 치환
2. 새로운 방정식 유도
3. 치환된 값으로 원래 미지수 계산

## 해의 개수
- 두 이차함수 그래프의 교점
- 최대 4개의 해 가능
    `,
    keywords: ["연립방정식", "대입법", "가감법", "치환법"],
    examples: [
      {
        id: "system-ex1",
        title: "대입법 예제",
        problem: `다음 연립방정식을 풀어라.\nx² + y = 3\nx + y = 2`,
        solution: "(1, 1), (-2, 4)",
        explanation:
          "1) x + y = 2에서 y = 2 - x\n2) x² + (2 - x) = 3\n3) x² - x - 1 = 0",
      },
      {
        id: "system-ex2",
        title: "대칭형 연립방정식",
        problem: `다음 연립방정식을 풀어라.\nx + y = 3\nxy = 2`,
        solution: "(2, 1), (1, 2)",
        explanation:
          "1) u = x + y = 3, v = xy = 2로 치환\n2) x, y는 이차방정식 t² - 3t + 2 = 0의 근",
      },
    ],
    formulas: [
      {
        id: "system-form1",
        title: "대칭형 치환",
        formula: "u = x + y, v = xy",
        description: "대칭형 연립방정식에서 자주 사용되는 치환",
      },
    ],
    difficulty: "중급",
  },
  {
    id: "system-linear-inequality",
    chapter: "equation",
    section: 8,
    title: "연립일차부등식",
    category: "방정식과 부등식",
    description:
      "두 개 이상의 일차부등식으로 이루어진 연립부등식의 해법을 학습합니다.",
    date: "2024-01-22",
    content: `
# 연립일차부등식

## 일차부등식의 성질
1. 양변에 같은 수 더하기/빼기 가능
2. 양변에 양수 곱하기/나누기 가능
3. 양변에 음수 곱하기/나누기 시 부등호 방향 바뀜

## 연립일차부등식의 해법
1. 각 부등식 풀이
2. 해집합의 교집합 구하기
3. 구간으로 표현

## 절댓값을 포함한 부등식
1. |x| < a ⟺ -a < x < a
2. |x| > a ⟺ x < -a 또는 x > a

## 부등식의 영역
- 수직선 위의 구간
- 구간의 교집합과 합집합
    `,
    keywords: ["부등식", "절댓값", "해집합", "구간"],
    examples: [
      {
        id: "inequality-ex1",
        title: "연립일차부등식",
        problem:
          "2x - 3 > x + 1 이고 3x + 2 ≤ 8일 때, x의 값의 범위를 구하시오.",
        solution: "2 ≤ x < 4",
        explanation:
          "1) 2x - 3 > x + 1 ⟹ x > 4\n2) 3x + 2 ≤ 8 ⟹ x ≤ 2\n3) 두 부등식을 만족하는 x의 범위",
      },
      {
        id: "inequality-ex2",
        title: "절댓값 부등식",
        problem: "|x - 1| < 3을 풀어라.",
        solution: "-2 < x < 4",
        explanation: "1) |x - 1| < 3\n2) -3 < x - 1 < 3\n3) -2 < x < 4",
      },
    ],
    formulas: [
      {
        id: "inequality-form1",
        title: "절댓값 부등식",
        formula: "|x| < a ⟺ -a < x < a\n|x| > a ⟺ x < -a 또는 x > a",
        description: "절댓값을 포함한 부등식의 기본 공식",
      },
    ],
    difficulty: "기본",
  },
];

export const EQUATION_TOPICS_5: MathTopic[] = [
  {
    id: "quadratic-inequality",
    chapter: "equation",
    section: 9,
    title: "이차부등식과 연립이차부등식",
    category: "방정식과 부등식",
    description: "이차부등식의 해법과 연립이차부등식의 풀이 방법을 학습합니다.",
    date: "2024-01-24",
    content: `
# 이차부등식과 연립이차부등식

## 이차부등식의 풀이법
1. 좌변의 이차식을 인수분해
2. 이차방정식의 근 구하기
3. 부호 표 작성
4. 부등식의 영역 판단

## 이차부등식 풀이 순서
1. ax² + bx + c > 0 (또는 <, ≤, ≥)
2. a의 부호 확인
3. 판별식으로 근의 개수 확인
4. 수직선 위에 해집합 표시

## 연립이차부등식
- 두 개 이상의 이차부등식으로 이루어진 부등식
- 각각의 해를 구한 후 교집합

## 이차함수와 부등식의 관계
1. y = ax² + bx + c의 그래프
2. x축 위아래 영역 활용
3. 그래프의 개형과 해의 관계
    `,
    keywords: ["이차부등식", "부호 표", "연립부등식", "해집합"],
    examples: [
      {
        id: "quad-ineq-ex1",
        title: "이차부등식",
        problem: "x² - 5x + 6 > 0을 풀어라.",
        solution: "x < 2 또는 x > 3",
        explanation: `1) x² - 5x + 6 = (x - 2)(x - 3)
2) 부호 표 작성
3) a > 0이므로 인수가 모두 양수이거나 모두 음수인 영역이 해`,
      },
      {
        id: "quad-ineq-ex2",
        title: "연립이차부등식",
        problem:
          "x² - x - 2 ≤ 0이고 x² - 4 < 0을 만족하는 x의 값의 범위를 구하시오.",
        solution: "[-1, 2]",
        explanation: `1) x² - x - 2 ≤ 0 ⟹ -1 ≤ x ≤ 2
2) x² - 4 < 0 ⟹ -2 < x < 2
3) 두 부등식의 해집합의 교집합`,
      },
    ],
    formulas: [
      {
        id: "quad-ineq-form1",
        title: "이차부등식의 해",
        formula: `ax² + bx + c > 0 (a > 0)일 때,
x < α 또는 x > β (α, β는 이차방정식의 근)`,
        description: "이차부등식의 기본 해 공식",
      },
    ],
    difficulty: "중급",
  },
];

export const ALL_EQUATION_TOPICS = [
  ...EQUATION_TOPICS_1,
  ...EQUATION_TOPICS_2,
  ...EQUATION_TOPICS_3,
  ...EQUATION_TOPICS_4,
  ...EQUATION_TOPICS_5,
];
