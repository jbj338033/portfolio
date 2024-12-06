import { MathTopic } from "../../../types/math";

export const FUNCTION_TOPICS_1: MathTopic[] = [
  {
    id: "function-basic",
    chapter: "function",
    section: 1,
    title: "함수의 뜻과 그래프",
    category: "함수",
    description: "함수의 정의와 그래프를 통한 함수의 이해를 학습합니다.",
    date: "2024-02-21",
    content: `
# 함수의 뜻과 그래프

## 함수의 정의
- 정의역의 각 원소가 공역의 원소를 오직 하나씩만 대응
- y = f(x)

## 함수의 요소
1. 정의역(domain): x의 집합
2. 공역(codomain): y의 집합
3. 치역(range): 실제로 대응되는 y값들의 집합

## 함수의 표현 방법
1. 대응 관계
2. 순서쌍
3. 화살표
4. 그래프

## 함수의 그래프
1. x-y 좌표평면 위의 점들의 집합
2. 수직선 검사: 수직선이 그래프와 한 점에서만 만남
3. 점의 이동으로 이해

## 함수의 성질
1. 일대일 함수
2. 항등 함수
3. 상수 함수
    `,
    keywords: ["함수", "정의역", "치역", "그래프"],
    examples: [
      {
        id: "func-ex1",
        title: "함수의 치역",
        problem: "f(x) = x² - 4x + 3의 치역을 구하시오.",
        solution: "y ≥ -1",
        explanation: `1) f(x) = (x - 2)² - 1
2) 이차함수의 그래프는 위로 볼록
3) 최솟값이 -1이므로 치역은 y ≥ -1`,
      },
      {
        id: "func-ex2",
        title: "일대일 함수",
        problem: "f(x) = 2x + 1이 일대일 함수임을 보이시오.",
        solution: "서로 다른 x값에 대해 서로 다른 y값",
        explanation: `1) x₁ ≠ x₂일 때
2) f(x₁) = 2x₁ + 1, f(x₂) = 2x₂ + 1
3) f(x₁) ≠ f(x₂)이므로 일대일 함수`,
      },
    ],
    formulas: [
      {
        id: "func-form1",
        title: "함수의 정의",
        formula: "f: X → Y, x ∈ X에 대하여 y = f(x) ∈ Y",
        description: "X는 정의역, Y는 공역을 나타냄",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "composition",
    chapter: "function",
    section: 2,
    title: "합성함수",
    category: "함수",
    description: "두 함수의 합성과 그 성질을 학습합니다.",
    date: "2024-02-23",
    content: `
# 합성함수

## 합성함수의 정의
- 두 함수를 연속적으로 적용
- (g∘f)(x) = g(f(x))

## 합성의 조건
1. f의 치역이 g의 정의역에 포함
2. 합성의 순서에 주의

## 합성함수의 성질
1. 결합법칙: (h∘g)∘f = h∘(g∘f)
2. 교환법칙은 성립하지 않음
   - g∘f ≠ f∘g (일반적으로)

## 합성함수의 활용
1. 정의역과 치역 찾기
2. 역함수와의 관계
3. 일대일 대응 확인
    `,
    keywords: ["합성함수", "정의역", "치역", "결합법칙"],
    examples: [
      {
        id: "comp-ex1",
        title: "합성함수 계산",
        problem: "f(x) = x + 1, g(x) = x²일 때, (g∘f)(2)를 구하시오.",
        solution: "9",
        explanation: `1) f(2) = 3
2) g(f(2)) = g(3)
3) g(3) = 9`,
      },
      {
        id: "comp-ex2",
        title: "합성함수의 정의역",
        problem:
          "f(x) = \\sqrt{x}, g(x) = x - 2일 때, (f∘g)(x)의 정의역을 구하시오.",
        solution: "x ≥ 2",
        explanation: `1) g(x) = x - 2
2) f는 음이 아닌 실수에서 정의
3) x - 2 ≥ 0이어야 함`,
      },
    ],
    formulas: [
      {
        id: "comp-form1",
        title: "합성함수",
        formula: "(g∘f)(x) = g(f(x))",
        description: "f를 먼저 적용한 후 g를 적용",
      },
    ],
    difficulty: "중급",
  },
];

export const FUNCTION_TOPICS_2: MathTopic[] = [
  {
    id: "inverse",
    chapter: "function",
    section: 3,
    title: "역함수",
    category: "함수",
    description: "함수의 역함수의 개념과 성질을 학습합니다.",
    date: "2024-02-25",
    content: `
# 역함수

## 역함수의 정의
- y = f(x)에서 x와 y를 서로 바꾼 함수
- f⁻¹∘f = f∘f⁻¹ = 항등함수

## 역함수의 존재 조건
1. 일대일 함수
2. 항상 대응

## 역함수의 그래프
- y = x에 대하여 대칭
- f(a) = b ⟺ f⁻¹(b) = a

## 주요 역함수
1. y = ax + b의 역함수: y = \\frac{x-b}{a}
2. y = x²의 역함수: y = ±\\sqrt{x}
3. y = e^x의 역함수: y = ln x

## 역함수의 성질
1. (f⁻¹)⁻¹ = f
2. 증가함수의 역함수는 증가함수
3. 감소함수의 역함수는 감소함수
    `,
    keywords: ["역함수", "일대일함수", "대응", "대칭"],
    examples: [
      {
        id: "inv-ex1",
        title: "역함수 구하기",
        problem: "f(x) = 3x + 2의 역함수를 구하시오.",
        solution: "f⁻¹(x) = \\frac{x-2}{3}",
        explanation: `1) y = 3x + 2
2) x와 y를 바꾸면 x = 3y + 2
3) y에 대해 풀면 y = \\frac{x-2}{3}`,
      },
      {
        id: "inv-ex2",
        title: "역함수 존재성",
        problem: "f(x) = x²이 역함수를 갖지 않는 이유를 설명하시오.",
        solution: "일대일 함수가 아니기 때문",
        explanation: `1) x = -1, 1일 때 모두 f(x) = 1
2) 하나의 y값에 두 개의 x값 대응
3) 따라서 일대일 함수가 아님`,
      },
    ],
    formulas: [
      {
        id: "inv-form1",
        title: "역함수 관계식",
        formula: "f⁻¹(f(x)) = x, f(f⁻¹(x)) = x",
        description: "함수와 그 역함수의 합성은 항등함수",
      },
    ],
    difficulty: "중급",
  },
  {
    id: "rational",
    chapter: "function",
    section: 4,
    title: "유리함수",
    category: "함수",
    description:
      "다항식의 몫으로 표현되는 유리함수의 성질과 그래프를 학습합니다.",
    date: "2024-02-27",
    content: `
# 유리함수

## 유리함수의 정의
- f(x) = \\frac{P(x)}{Q(x)} (Q(x) ≠ 0)
- P(x), Q(x)는 다항식

## 그래프의 특징
1. 점근선
   - 수직점근선: x = a (Q(a) = 0)
   - 수평점근선: y = k (극한값)
2. 절점
3. 증감과 극값

## 유리식의 덧셈과 뺄셈
1. 분모의 최소공배수
2. 통분하여 계산

## 그래프의 개형
1. y = \\frac{a}{x}
2. y = \\frac{ax+b}{cx+d}
3. y = \\frac{ax^2+bx+c}{dx+e}
    `,
    keywords: ["유리함수", "점근선", "극값", "통분"],
    examples: [
      {
        id: "rat-ex1",
        title: "점근선 구하기",
        problem: "f(x) = \\frac{2x+1}{x-2}의 점근선을 구하시오.",
        solution: "수직점근선: x = 2\n수평점근선: y = 2",
        explanation: `1) 수직점근선은 분모 = 0
2) x → ±∞일 때의 극한값이 수평점근선
3) lim(x→∞) (2x+1)/(x-2) = 2`,
      },
      {
        id: "rat-ex2",
        title: "유리식의 계산",
        problem: "\\frac{1}{x+1} + \\frac{2}{x-1}를 계산하시오.",
        solution: "\\frac{3x-1}{(x+1)(x-1)}",
        explanation: `1) 분모의 최소공배수: (x+1)(x-1)
2) 통분하여 계산
3) \\frac{1(x-1)+2(x+1)}{(x+1)(x-1)}`,
      },
    ],
    formulas: [
      {
        id: "rat-form1",
        title: "유리함수의 극한",
        formula: "lim(x→∞) \\frac{ax^n+...}{bx^m+...} = \\frac{a}{b} (n=m)",
        description: "최고차항의 계수비가 수평점근선",
      },
    ],
    difficulty: "중급",
  },
];

export const FUNCTION_TOPICS_3: MathTopic[] = [
  {
    id: "irrational",
    chapter: "function",
    section: 5,
    title: "무리함수",
    category: "함수",
    description: "무리식을 포함하는 함수의 성질과 그래프를 학습합니다.",
    date: "2024-02-29",
    content: `
# 무리함수

## 무리함수의 정의
- 식에 루트가 포함된 함수
- y = \\sqrt{ax + b} 꼴
- y = \\sqrt[n]{ax + b} 꼴

## 정의역
1. 짝수 제곱근: ax + b ≥ 0
2. 홀수 제곱근: 모든 실수
3. 분모의 무리식: 분모 ≠ 0

## 그래프의 특징
1. y = \\sqrt{x}의 그래프
   - 원점을 지남
   - x ≥ 0에서 정의
   - 증가함수

2. y = \\sqrt{ax + b}의 그래프
   - y = \\sqrt{x}의 그래프를 평행이동

## 평행이동
1. x축 방향: -\\frac{b}{a}만큼
2. y축 방향: ±\\sqrt{c}만큼

## 무리식의 계산
1. 유리화
2. 분모의 무리식 처리
3. 합리화
    `,
    keywords: ["무리함수", "정의역", "평행이동", "유리화"],
    examples: [
      {
        id: "irr-ex1",
        title: "정의역 구하기",
        problem: "y = \\sqrt{2x - 3}의 정의역을 구하시오.",
        solution: "x ≥ \\frac{3}{2}",
        explanation: `1) 제곱근 안은 음수가 될 수 없음
2) 2x - 3 ≥ 0
3) x ≥ \\frac{3}{2}`,
      },
      {
        id: "irr-ex2",
        title: "무리식의 계산",
        problem:
          "\\frac{\\sqrt{x+1} - \\sqrt{x-1}}{\\sqrt{x+1} + \\sqrt{x-1}}를 계산하시오.",
        solution: "\\frac{1}{\\sqrt{x+1} + \\sqrt{x-1}}",
        explanation: `1) 분자와 분모에 분자의 켤레식을 곱함
2) (\\sqrt{x+1} - \\sqrt{x-1})(\\sqrt{x+1} - \\sqrt{x-1})
3) = (x+1) - (x-1) = 2`,
      },
    ],
    formulas: [
      {
        id: "irr-form1",
        title: "무리함수의 평행이동",
        formula: "y = \\sqrt{a(x-p)} + q",
        description: "x축 방향으로 p만큼, y축 방향으로 q만큼 평행이동",
      },
    ],
    difficulty: "중급",
  },
];

export const ALL_FUNCTION_TOPICS = [
  ...FUNCTION_TOPICS_1,
  ...FUNCTION_TOPICS_2,
  ...FUNCTION_TOPICS_3,
];
