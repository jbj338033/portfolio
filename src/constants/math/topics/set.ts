import { MathTopic } from "../../../types/math";

export const SET_TOPICS_1: MathTopic[] = [
  {
    id: "set-basic",
    chapter: "set-proposition",
    section: 1,
    title: "집합의 뜻과 포함 관계",
    category: "집합과 명제",
    description: "집합의 기본 개념과 포함 관계를 학습합니다.",
    date: "2024-02-11",
    content: `
# 집합의 뜻과 포함 관계

## 집합의 정의와 표현
1. 원소나열법: A = {1, 2, 3}
2. 조건제시법: A = {x | x는 양의 홀수}
3. 벤 다이어그램

## 원소와 집합
- a ∈ A: a는 A의 원소
- b ∉ A: b는 A의 원소가 아님

## 집합의 종류
1. 유한집합과 무한집합
2. 공집합: ∅
3. 전체집합: U

## 부분집합
A ⊂ B: A는 B의 부분집합
- 진부분집합: A ⊊ B
- A = B ⟺ A ⊂ B이고 B ⊂ A

## 집합의 개수
- n(A): 집합 A의 원소의 개수
- 부분집합의 개수: 2ⁿ
- 진부분집합의 개수: 2ⁿ - 1
    `,
    keywords: ["집합", "원소", "부분집합", "포함관계"],
    examples: [
      {
        id: "set-ex1",
        title: "부분집합 판별",
        problem: "A = {1, 2, 3}, B = {1, 2, 3, 4}일 때, A ⊂ B임을 보이시오.",
        solution: "A의 모든 원소가 B의 원소임을 확인",
        explanation: `1) 1 ∈ A이고 1 ∈ B
2) 2 ∈ A이고 2 ∈ B
3) 3 ∈ A이고 3 ∈ B
4) A의 모든 원소가 B의 원소이므로 A ⊂ B`,
      },
      {
        id: "set-ex2",
        title: "부분집합의 개수",
        problem: "집합 A = {a, b, c, d}의 부분집합의 개수를 구하시오.",
        solution: "16",
        explanation: `1) 원소가 4개인 집합
2) 부분집합의 개수 = 2⁴
3) 2⁴ = 16`,
      },
    ],
    formulas: [
      {
        id: "set-form1",
        title: "부분집합의 개수",
        formula: "원소가 n개인 집합의 부분집합의 개수: 2ⁿ",
        description: "각 원소를 포함하거나 포함하지 않는 두 가지 경우의 수",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "set-operations",
    chapter: "set-proposition",
    section: 2,
    title: "집합의 연산",
    category: "집합과 명제",
    description: "집합의 기본적인 연산법칙과 그 성질을 학습합니다.",
    date: "2024-02-13",
    content: `
# 집합의 연산

## 합집합과 교집합
1. 합집합: A ∪ B
   - A와 B 중 적어도 하나에 속하는 원소들의 집합
2. 교집합: A ∩ B
   - A와 B에 공통으로 속하는 원소들의 집합

## 차집합과 여집합
1. 차집합: A - B
   - A에 속하고 B에 속하지 않는 원소들의 집합
2. 여집합: Aᶜ
   - 전체집합 U에서 A를 뺀 집합

## 연산 법칙
1. 교환법칙
   - A ∪ B = B ∪ A
   - A ∩ B = B ∩ A

2. 결합법칙
   - (A ∪ B) ∪ C = A ∪ (B ∪ C)
   - (A ∩ B) ∩ C = A ∩ (B ∩ C)

3. 분배법칙
   - A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)
   - A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
    `,
    keywords: ["합집합", "교집합", "차집합", "여집합"],
    examples: [
      {
        id: "ops-ex1",
        title: "집합의 연산",
        problem: "A = {1, 2, 3}, B = {2, 3, 4}일 때, A ∪ B와 A ∩ B를 구하시오.",
        solution: "A ∪ B = {1, 2, 3, 4}, A ∩ B = {2, 3}",
        explanation: `1) 합집합: 모든 원소를 나열
2) 교집합: 공통 원소만 나열`,
      },
      {
        id: "ops-ex2",
        title: "집합의 개수",
        problem: "n(A) = 5, n(B) = 4, n(A ∩ B) = 2일 때, n(A ∪ B)를 구하시오.",
        solution: "7",
        explanation: `1) n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
2) = 5 + 4 - 2 = 7`,
      },
    ],
    formulas: [
      {
        id: "ops-form1",
        title: "포함 배제의 원리",
        formula: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
        description: "두 집합의 합집합의 원소의 개수를 구하는 공식",
      },
    ],
    difficulty: "기본",
  },
];

export const SET_TOPICS_2: MathTopic[] = [
  {
    id: "proposition-condition",
    chapter: "set-proposition",
    section: 3,
    title: "명제와 조건",
    category: "집합과 명제",
    description: "명제의 개념과 조건의 진리집합을 학습합니다.",
    date: "2024-02-15",
    content: `
# 명제와 조건

## 명제
- 참, 거짓을 분명히 판별할 수 있는 문장
- 진리값: 참(T) 또는 거짓(F)

## 조건과 진리집합
1. 조건: p(x)
2. 진리집합: {x | p(x)가 참}

## 명제의 종류
1. 단순명제
   - 하나의 문장으로 된 명제

2. 합성명제
   - p ∧ q: 그리고(AND)
   - p ∨ q: 또는(OR)
   - ~p: p가 아니다(NOT)
   - p → q: p이면 q이다
   - p ↔ q: p와 q는 동치이다

## 조건의 부정
1. x < a의 부정은 x ≥ a
2. x = a의 부정은 x ≠ a
3. x > a의 부정은 x ≤ a
    `,
    keywords: ["명제", "조건", "진리값", "진리집합"],
    examples: [
      {
        id: "prop-ex1",
        title: "진리집합",
        problem: "x에 대한 조건 'x² < 4'의 진리집합을 구하시오.",
        solution: "{x | -2 < x < 2}",
        explanation: `1) x² < 4
2) -2 < x < 2
3) 따라서 진리집합은 -2와 2 사이의 모든 실수`,
      },
      {
        id: "prop-ex2",
        title: "명제의 진리값",
        problem:
          "p: 2 + 3 = 5, q: 1 + 4 = 6일 때, p ∧ q와 p ∨ q의 진리값을 구하시오.",
        solution: "p ∧ q = F, p ∨ q = T",
        explanation: `1) p는 참(T), q는 거짓(F)
2) p ∧ q는 둘 다 참이어야 참
3) p ∨ q는 하나만 참이어도 참`,
      },
    ],
    formulas: [
      {
        id: "prop-form1",
        title: "진리표",
        formula: `
p  q | p∧q  p∨q  ~p
T  T |  T    T    F
T  F |  F    T    F
F  T |  F    T    T
F  F |  F    F    T`,
        description: "기본적인 논리연산의 진리표",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "proposition-relations",
    chapter: "set-proposition",
    section: 4,
    title: "명제 사이의 관계",
    category: "집합과 명제",
    description: "조건명제의 역과 대우, 동치관계를 학습합니다.",
    date: "2024-02-17",
    content: `
# 명제 사이의 관계

## 조건명제
p → q (p이면 q이다)
1. 가정(p)과 결론(q)
2. 진리표로 표현

## 역과 대우
1. 역: q → p
2. 이: ~p → ~q
3. 대우: ~q → ~p
- 명제와 대우는 동치

## 필요조건과 충분조건
1. p → q일 때
   - p는 q의 충분조건
   - q는 p의 필요조건

## 동치관계
p ↔ q
- p → q이고 q → p일 때
- p와 q가 논리적으로 같음
    `,
    keywords: ["조건명제", "역", "대우", "동치"],
    examples: [
      {
        id: "rel-ex1",
        title: "역과 대우",
        problem:
          "명제 '어떤 자연수가 3의 배수이면 그 수는 짝수이다'의 대우를 구하시오.",
        solution: "어떤 자연수가 짝수가 아니면 그 수는 3의 배수가 아니다",
        explanation: `1) 원명제: p → q
2) p: 3의 배수, q: 짝수
3) 대우: ~q → ~p`,
      },
      {
        id: "rel-ex2",
        title: "동치관계",
        problem: "x > 2와 x² > 4 (단, x는 양수)가 동치임을 보이시오.",
        solution: "두 조건의 해집합이 같음을 보임",
        explanation: `1) x > 2 ⟹ x는 양수이므로 x² > 4
2) x² > 4 ⟹ x > 2 (x는 양수)
3) 따라서 두 조건은 동치`,
      },
    ],
    formulas: [
      {
        id: "rel-form1",
        title: "조건명제의 진리표",
        formula: `
p  q | p→q
T  T |  T
T  F |  F
F  T |  T
F  F |  T`,
        description: "조건명제의 진리값 정의",
      },
    ],
    difficulty: "중급",
  },
];

export const SET_TOPICS_3: MathTopic[] = [
  {
    id: "proof",
    chapter: "set-proposition",
    section: 5,
    title: "명제의 증명과 절대부등식의 증명",
    category: "집합과 명제",
    description: "증명의 여러 가지 방법과 절대부등식의 증명법을 학습합니다.",
    date: "2024-02-19",
    content: `
# 명제의 증명과 절대부등식의 증명

## 증명의 종류
1. 직접증명법
   - 가정으로부터 직접 결론 도출

2. 대우증명법
   - 대우명제를 증명하여 원명제 증명

3. 귀류법
   - 결론의 부정을 가정하여 모순 도출

## 수학적 귀납법
n = 1일 때 성립함을 보이고,
n = k일 때 성립한다고 가정하면
n = k + 1일 때도 성립함을 보임

## 절대부등식의 증명
1. 방법 1: 좌변-우변 ≥ 0 증명
2. 방법 2: 적절한 식 변형
3. 방법 3: 이차식의 판별식 이용

## 산술평균과 기하평균
- AM-GM 부등식
- a, b > 0일 때
- \\frac{a + b}{2} ≥ \\sqrt{ab}
`,
    keywords: ["증명", "귀류법", "귀납법", "절대부등식"],
    examples: [
      {
        id: "proof-ex1",
        title: "수학적 귀납법",
        problem:
          "모든 자연수 n에 대하여 1 + 2 + ... + n = \\frac{n(n+1)}{2}임을 증명하시오.",
        solution: "수학적 귀납법으로 증명",
        explanation: `1) n = 1일 때: 1 = \\frac{1(1+1)}{2}
2) n = k일 때 성립한다고 가정
3) n = k + 1일 때 성립함을 보임`,
      },
      {
        id: "proof-ex2",
        title: "절대부등식",
        problem: "a, b가 양수일 때, a + b ≥ 2\\sqrt{ab}임을 증명하시오.",
        solution: "(\\sqrt{a} - \\sqrt{b})² ≥ 0을 이용하여 증명",
        explanation: `1) (\\sqrt{a} - \\sqrt{b})² ≥ 0
2) a - 2\\sqrt{ab} + b ≥ 0
3) a + b ≥ 2\\sqrt{ab}`,
      },
    ],
    formulas: [
      {
        id: "proof-form1",
        title: "산술기하평균 부등식",
        formula: "\\frac{a + b}{2} ≥ \\sqrt{ab} (a, b > 0)",
        description: "두 양수의 산술평균은 기하평균보다 크거나 같다.",
      },
      {
        id: "proof-form2",
        title: "수학적 귀납법",
        formula: `P(1)이 참이고,
k ≥ 1인 모든 자연수 k에 대하여
P(k)이면 P(k+1)도 참일 때,
모든 자연수 n에 대하여 P(n)은 참이다.`,
        description: "수학적 귀납법의 기본 형식",
      },
    ],
    difficulty: "중급",
  },
];

export const ALL_SET_TOPICS = [
  ...SET_TOPICS_1,
  ...SET_TOPICS_2,
  ...SET_TOPICS_3,
];
