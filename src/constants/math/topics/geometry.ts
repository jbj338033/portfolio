import { MathTopic } from "../../../types/math";

export const GEOMETRY_TOPICS_1: MathTopic[] = [
  {
    id: "distance",
    chapter: "geometry",
    section: 1,
    title: "두 점 사이의 거리",
    category: "도형의 방정식",
    description: "좌표평면에서 두 점 사이의 거리를 구하는 방법을 학습합니다.",
    date: "2024-01-26",
    content: `
# 두 점 사이의 거리

## 좌표평면의 기본 개념
1. 수직선과 수평선
2. x좌표와 y좌표
3. 순서쌍 (x, y)

## 두 점 사이의 거리 공식
두 점 A(x₁, y₁), B(x₂, y₂) 사이의 거리 d는
d = \\sqrt{(x₂ - x₁)² + (y₂ - y₁)²}

## 특수한 경우
1. 수직선 위의 두 점: |y₂ - y₁|
2. 수평선 위의 두 점: |x₂ - x₁|

## 중점 공식
두 점 A(x₁, y₁), B(x₂, y₂)의 중점 M의 좌표:
M(\\frac{x₁ + x₂}{2}, \\frac{y₁ + y₂}{2})
    `,
    keywords: ["좌표평면", "거리", "중점", "피타고라스"],
    examples: [
      {
        id: "dist-ex1",
        title: "두 점 사이의 거리",
        problem: "두 점 A(1, 2)와 B(4, 6) 사이의 거리를 구하시오.",
        solution: "5",
        explanation: `1) d = \\sqrt{(4-1)² + (6-2)²}
2) = \\sqrt{9 + 16}
3) = \\sqrt{25} = 5`,
      },
      {
        id: "dist-ex2",
        title: "중점 찾기",
        problem: "두 점 A(-2, 3)와 B(4, 7)의 중점의 좌표를 구하시오.",
        solution: "(1, 5)",
        explanation: `1) x좌표: \\frac{-2 + 4}{2} = 1
2) y좌표: \\frac{3 + 7}{2} = 5
3) 따라서 중점은 (1, 5)`,
      },
    ],
    formulas: [
      {
        id: "dist-form1",
        title: "거리 공식",
        formula: "d = \\sqrt{(x₂ - x₁)² + (y₂ - y₁)²}",
        description: "두 점 사이의 거리를 구하는 공식",
      },
      {
        id: "dist-form2",
        title: "중점 공식",
        formula: "(\\frac{x₁ + x₂}{2}, \\frac{y₁ + y₂}{2})",
        description: "두 점의 중점 좌표를 구하는 공식",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "division",
    chapter: "geometry",
    section: 2,
    title: "선분의 내분과 외분",
    category: "도형의 방정식",
    description:
      "선분을 일정한 비로 나누는 내분점과 외분점의 좌표를 구하는 방법을 학습합니다.",
    date: "2024-01-28",
    content: `
# 선분의 내분과 외분

## 내분점
선분 AB를 m : n으로 내분하는 점 P의 좌표:
P(\\frac{nx₁ + mx₂}{m + n}, \\frac{ny₁ + my₂}{m + n})

## 외분점
선분 AB를 m : n으로 외분하는 점 Q의 좌표:
Q(\\frac{-nx₁ + mx₂}{m - n}, \\frac{-ny₁ + my₂}{m - n})

## 특수한 비율
1. 1 : 1 내분점 → 중점
2. 2 : 1 내분점 → 삼등분점
3. 1 : -1 외분점 → 무한원점 방향

## 활용
1. 삼각형의 무게중심
2. 중선의 성질
3. 선분의 분할
    `,
    keywords: ["내분", "외분", "중점", "비율"],
    examples: [
      {
        id: "div-ex1",
        title: "내분점",
        problem:
          "선분 AB의 양 끝점이 A(1, 2), B(7, 8)일 때, 이 선분을 2 : 3으로 내분하는 점의 좌표를 구하시오.",
        solution: "(3.4, 4.4)",
        explanation: `1) x = \\frac{3(1) + 2(7)}{2 + 3} = \\frac{17}{5} = 3.4
2) y = \\frac{3(2) + 2(8)}{2 + 3} = \\frac{22}{5} = 4.4`,
      },
      {
        id: "div-ex2",
        title: "외분점",
        problem:
          "선분 AB의 양 끝점이 A(0, 0), B(4, 6)일 때, 이 선분을 2 : 1로 외분하는 점의 좌표를 구하시오.",
        solution: "(8, 12)",
        explanation: `1) x = \\frac{-1(0) + 2(4)}{2 - 1} = 8
2) y = \\frac{-1(0) + 2(6)}{2 - 1} = 12`,
      },
    ],
    formulas: [
      {
        id: "div-form1",
        title: "내분점 공식",
        formula: "(\\frac{nx₁ + mx₂}{m + n}, \\frac{ny₁ + my₂}{m + n})",
        description: "m : n 내분점의 좌표",
      },
      {
        id: "div-form2",
        title: "외분점 공식",
        formula: "(\\frac{-nx₁ + mx₂}{m - n}, \\frac{-ny₁ + my₂}{m - n})",
        description: "m : n 외분점의 좌표",
      },
    ],
    difficulty: "기본",
  },
];

export const GEOMETRY_TOPICS_2: MathTopic[] = [
  {
    id: "line",
    chapter: "geometry",
    section: 3,
    title: "직선의 방정식",
    category: "도형의 방정식",
    description: "좌표평면에서 직선을 나타내는 여러 가지 방정식을 학습합니다.",
    date: "2024-01-30",
    content: `
# 직선의 방정식

## 기본 형태
1. 일반형: ax + by + c = 0
2. 기울기-절편형: y = mx + n
3. 점-기울기형: y - y₁ = m(x - x₁)
4. 두 점을 지나는 직선: \\frac{y - y₁}{y₂ - y₁} = \\frac{x - x₁}{x₂ - x₁}

## 특수한 직선
1. x축에 평행한 직선: y = k
2. y축에 평행한 직선: x = h
3. 원점을 지나는 직선: y = mx

## 기울기
- m = \\frac{y₂ - y₁}{x₂ - x₁}
- m = tan θ (θ는 x축의 양의 방향과 이루는 각)

## y절편과 x절편
1. y절편: (0, n)
2. x절편: (-\\frac{c}{a}, 0)
    `,
    keywords: ["직선", "기울기", "절편", "방정식"],
    examples: [
      {
        id: "line-ex1",
        title: "두 점을 지나는 직선",
        problem: "점 A(1, 2)와 B(3, 6)을 지나는 직선의 방정식을 구하시오.",
        solution: "y = 2x",
        explanation: `1) 기울기 m = \\frac{6-2}{3-1} = 2
2) y - 2 = 2(x - 1)
3) y = 2x`,
      },
      {
        id: "line-ex2",
        title: "절편 구하기",
        problem: "직선 2x - 3y + 6 = 0의 x절편과 y절편을 구하시오.",
        solution: "x절편: -3, y절편: 2",
        explanation: `1) x절편: y = 0 대입하여 2x + 6 = 0 ∴ x = -3
2) y절편: x = 0 대입하여 -3y + 6 = 0 ∴ y = 2`,
      },
    ],
    formulas: [
      {
        id: "line-form1",
        title: "기울기 공식",
        formula: "m = \\frac{y₂ - y₁}{x₂ - x₁}",
        description: "두 점을 지나는 직선의 기울기",
      },
      {
        id: "line-form2",
        title: "점-기울기 공식",
        formula: "y - y₁ = m(x - x₁)",
        description: "한 점과 기울기가 주어졌을 때의 직선의 방정식",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "parallel-perpendicular",
    chapter: "geometry",
    section: 4,
    title: "두 직선의 평행과 수직",
    category: "도형의 방정식",
    description: "두 직선의 평행 조건과 수직 조건을 이해하고 이를 활용합니다.",
    date: "2024-02-01",
    content: `
# 두 직선의 평행과 수직

## 평행 조건
- 두 직선이 평행 ⟺ 기울기가 같다
- y = m₁x + n₁ // y = m₂x + n₂ ⟺ m₁ = m₂

## 수직 조건
- 두 직선이 수직 ⟺ 기울기의 곱이 -1
- m₁m₂ = -1

## 두 직선의 교점
1. 연립방정식으로 해결
2. 평행이면 교점 없음
3. 일치하면 무수히 많은 교점

## 두 직선 사이의 각
- tan θ = |\\frac{m₁ - m₂}{1 + m₁m₂}|
- θ는 0° ≤ θ ≤ 90°
    `,
    keywords: ["평행", "수직", "교점", "각도"],
    examples: [
      {
        id: "para-ex1",
        title: "평행 직선",
        problem:
          "직선 2x - y + 1 = 0과 평행하고 점 (2, 3)을 지나는 직선의 방정식을 구하시오.",
        solution: "2x - y - 1 = 0",
        explanation: `1) 2x - y + 1 = 0의 기울기는 2
2) (2, 3)을 지나고 기울기가 2인 직선
3) y - 3 = 2(x - 2)`,
      },
      {
        id: "perp-ex2",
        title: "수직 직선",
        problem:
          "직선 y = 3x + 1에 수직이고 점 (1, 4)를 지나는 직선의 방정식을 구하시오.",
        solution: "y = -\\frac{1}{3}x + \\frac{13}{3}",
        explanation: `1) 주어진 직선의 기울기가 3
2) 수직이므로 새 직선의 기울기는 -\\frac{1}{3}
3) (1, 4)를 대입하여 방정식 완성`,
      },
    ],
    formulas: [
      {
        id: "pp-form1",
        title: "각도 공식",
        formula: "tan θ = |\\frac{m₁ - m₂}{1 + m₁m₂}|",
        description: "두 직선이 이루는 각의 탄젠트 값",
      },
    ],
    difficulty: "중급",
  },
];

export const GEOMETRY_TOPICS_3: MathTopic[] = [
  {
    id: "circle",
    chapter: "geometry",
    section: 5,
    title: "원의 방정식",
    category: "도형의 방정식",
    description: "좌표평면에서 원을 나타내는 방정식과 그 성질을 학습합니다.",
    date: "2024-02-03",
    content: `
# 원의 방정식

## 원의 정의
- 한 정점(중심)으로부터 일정한 거리(반지름)에 있는 점들의 집합

## 원의 방정식
1. 중심이 (a, b)이고 반지름이 r인 원
   (x - a)² + (y - b)² = r²

2. 중심이 원점인 원
   x² + y² = r²

## 원의 일반형
x² + y² + 2gx + 2fy + c = 0
- 중심: (-g, -f)
- 반지름: \\sqrt{g² + f² - c}

## 원의 성질
1. 지름을 알면 중심과 반지름 결정
2. 세 점이 주어지면 유일한 원 결정
3. 중심과 원 위의 한 점으로 원 결정
    `,
    keywords: ["원", "중심", "반지름", "일반형"],
    examples: [
      {
        id: "circle-ex1",
        title: "원의 방정식",
        problem: "중심이 (2, -1)이고 반지름이 3인 원의 방정식을 구하시오.",
        solution: "(x - 2)² + (y + 1)² = 9",
        explanation: `1) 중심이 (2, -1)이므로 (x - 2)², (y - (-1))²
2) 반지름이 3이므로 우변은 3² = 9`,
      },
      {
        id: "circle-ex2",
        title: "원의 중심과 반지름",
        problem: "원 x² + y² - 4x + 6y + 4 = 0의 중심과 반지름을 구하시오.",
        solution: "중심: (2, -3), 반지름: 1",
        explanation: `1) x² - 4x + y² + 6y + 4 = 0
2) (x² - 4x + 4) + (y² + 6y + 9) = 9 - 4
3) (x - 2)² + (y + 3)² = 1`,
      },
    ],
    formulas: [
      {
        id: "circle-form1",
        title: "원의 표준형",
        formula: "(x - a)² + (y - b)² = r²",
        description: "중심이 (a, b)이고 반지름이 r인 원의 방정식",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "line-circle",
    chapter: "geometry",
    section: 6,
    title: "원과 직선의 위치 관계",
    category: "도형의 방정식",
    description:
      "원과 직선의 교점을 구하고 위치 관계를 파악하는 방법을 학습합니다.",
    date: "2024-02-05",
    content: `
# 원과 직선의 위치 관계

## 판별식
- d를 직선과 원의 중심 사이의 거리
- r을 원의 반지름이라 할 때

1. d > r: 만나지 않음(교점 0개)
2. d = r: 접함(교점 1개)
3. d < r: 만남(교점 2개)

## 거리 공식
- 점 (a, b)에서 직선 Ax + By + C = 0까지의 거리
d = \\frac{|Aa + Bb + C|}{\\sqrt{A² + B²}}

## 접선의 방정식
1. 접점이 주어진 경우
2. 원 밖의 점에서의 접선
3. 기울기가 주어진 접선

## 교점의 좌표
1. 연립방정식으로 해결
2. 이차방정식의 근으로 구함
    `,
    keywords: ["접선", "교점", "판별식", "거리"],
    examples: [
      {
        id: "lc-ex1",
        title: "위치 관계",
        problem: "원 x² + y² = 4와 직선 y = x + 2의 위치 관계를 구하시오.",
        solution: "서로 다른 두 점에서 만난다.",
        explanation: `1) 직선을 원에 대입: x² + (x + 2)² = 4
2) 2x² + 4x + 0 = 0
3) x = 0 또는 x = -2이므로 두 점에서 만남`,
      },
      {
        id: "lc-ex2",
        title: "접선의 방정식",
        problem:
          "원 x² + y² = 25 위의 점 (3, 4)에서의 접선의 방정식을 구하시오.",
        solution: "3x + 4y = 25",
        explanation: `1) 점 (3, 4)는 원 위의 점
2) 접선의 방정식: xx₁ + yy₁ = r²
3) 3x + 4y = 25`,
      },
    ],
    formulas: [
      {
        id: "lc-form1",
        title: "점과 직선 사이의 거리",
        formula: "d = \\frac{|Ax₀ + By₀ + C|}{\\sqrt{A² + B²}}",
        description: "점 (x₀, y₀)에서 직선 Ax + By + C = 0까지의 거리",
      },
    ],
    difficulty: "중급",
  },
];

export const GEOMETRY_TOPICS_4: MathTopic[] = [
  {
    id: "translation",
    chapter: "geometry",
    section: 7,
    title: "평행이동",
    category: "도형의 방정식",
    description:
      "좌표평면에서 도형을 평행이동하는 방법과 그 성질을 학습합니다.",
    date: "2024-02-07",
    content: `
# 평행이동

## 평행이동의 정의
- 도형의 모양과 크기는 변하지 않고 위치만 변하는 변환
- 모든 점을 같은 방향, 같은 거리만큼 이동

## 평행이동의 공식
점 (x, y)를 a만큼 x축 방향, b만큼 y축 방향으로 평행이동:
- 이동 전: (x, y)
- 이동 후: (x + a, y + b)

## 역평행이동
(x, y) → (x - a, y - b)

## 도형의 평행이동
1. 직선 ax + by + c = 0
   → ax + by + (c - aa - bb) = 0

2. 원 (x - h)² + (y - k)² = r²
   → (x - (h + a))² + (y - (k + b))² = r²
    `,
    keywords: ["평행이동", "변환", "좌표", "도형"],
    examples: [
      {
        id: "trans-ex1",
        title: "점의 평행이동",
        problem:
          "점 (2, -1)을 x축 방향으로 3만큼, y축 방향으로 -2만큼 평행이동한 점의 좌표를 구하시오.",
        solution: "(5, -3)",
        explanation: `1) x좌표: 2 + 3 = 5
2) y좌표: -1 + (-2) = -3`,
      },
      {
        id: "trans-ex2",
        title: "원의 평행이동",
        problem:
          "원 x² + y² - 4x + 2y + 4 = 0을 x축의 방향으로 3만큼, y축의 방향으로 -1만큼 평행이동한 원의 방정식을 구하시오.",
        solution: "x² + y² - 10x + 4y + 21 = 0",
        explanation: `1) 원의 중심 (2, -1)을 (5, -2)로 이동
2) (x - 5)² + (y + 2)² = r²으로 전개`,
      },
    ],
    formulas: [
      {
        id: "trans-form1",
        title: "평행이동 공식",
        formula: "(x, y) → (x + a, y + b)",
        description: "(a, b)만큼 평행이동하는 공식",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "symmetry",
    chapter: "geometry",
    section: 8,
    title: "대칭이동",
    category: "도형의 방정식",
    description:
      "좌표평면에서 도형을 대칭이동하는 방법과 그 성질을 학습합니다.",
    date: "2024-02-09",
    content: `
# 대칭이동

## 대칭의 종류
1. 점 대칭(원점 대칭)
2. 선 대칭(축 대칭)

## 점 대칭이동
점 (a, b)에 대하여 점 (x, y)의 대칭점:
(2a - x, 2b - y)

### 특수한 경우
- 원점 대칭: (x, y) → (-x, -y)

## 선 대칭이동

### x축 대칭
- (x, y) → (x, -y)

### y축 대칭
- (x, y) → (-x, y)

### y = x 대칭
- (x, y) → (y, x)

## 도형의 대칭이동
1. 직선의 대칭
2. 원의 대칭
3. 대칭축 구하기
    `,
    keywords: ["대칭", "점 대칭", "선 대칭", "변환"],
    examples: [
      {
        id: "sym-ex1",
        title: "점 대칭",
        problem:
          "점 (3, -2)를 점 (1, 2)에 대하여 대칭이동한 점의 좌표를 구하시오.",
        solution: "(-1, 6)",
        explanation: `1) x좌표: 2(1) - 3 = -1
2) y좌표: 2(2) - (-2) = 6`,
      },
      {
        id: "sym-ex2",
        title: "선 대칭",
        problem:
          "직선 2x - y + 1 = 0을 y축에 대하여 대칭이동한 직선의 방정식을 구하시오.",
        solution: "-2x - y + 1 = 0",
        explanation: `1) x를 -x로 바꿈
2) 계수 정리`,
      },
    ],
    formulas: [
      {
        id: "sym-form1",
        title: "점 대칭 공식",
        formula: "(x, y) → (2a - x, 2b - y)",
        description: "점 (a, b)에 대한 대칭이동 공식",
      },
      {
        id: "sym-form2",
        title: "축 대칭 공식",
        formula: `x축: (x, y) → (x, -y)
y축: (x, y) → (-x, y)
y = x: (x, y) → (y, x)`,
        description: "주요 축에 대한 대칭이동 공식",
      },
    ],
    difficulty: "중급",
  },
];

export const ALL_GEOMETRY_TOPICS = [
  ...GEOMETRY_TOPICS_1,
  ...GEOMETRY_TOPICS_2,
  ...GEOMETRY_TOPICS_3,
  ...GEOMETRY_TOPICS_4,
];
