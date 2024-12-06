import { MathTopic } from "../../../types/math";

export const PROBABILITY_TOPICS_1: MathTopic[] = [
  {
    id: "counting",
    chapter: "combination",
    section: 1,
    title: "경우의 수",
    category: "경우의 수",
    description: "경우의 수의 기본 개념과 덧셈법칙, 곱셈법칙을 학습합니다.",
    date: "2024-03-02",
    content: `
# 경우의 수

## 기본 개념
1. 어떤 사건이 일어날 수 있는 모든 경우의 수
2. 경우의 수를 n(A)로 표시
3. 중복과 순서에 주의

## 덧셈법칙
1. 서로 배반인 경우
   n(A ∪ B) = n(A) + n(B)

2. 서로 배반이 아닌 경우
   n(A ∪ B) = n(A) + n(B) - n(A ∩ B)

## 곱셈법칙
1. 연속적으로 일어나는 사건의 경우
2. 각각의 경우의 수를 곱함

## 분배법칙
n(A × (B ∪ C)) = n(A × B) + n(A × C)

## 여사건의 수
1. 전체에서 어떤 사건을 뺀 것
2. n(Aᶜ) = n(U) - n(A)
    `,
    keywords: ["경우의 수", "덧셈법칙", "곱셈법칙", "분배법칙"],
    examples: [
      {
        id: "count-ex1",
        title: "덧셈법칙",
        problem: "A = {1, 2, 3}, B = {2, 3, 4}일 때, n(A ∪ B)를 구하시오.",
        solution: "4",
        explanation: `1) n(A) = 3, n(B) = 3
2) n(A ∩ B) = 2
3) n(A ∪ B) = 3 + 3 - 2 = 4`,
      },
      {
        id: "count-ex2",
        title: "곱셈법칙",
        problem:
          "주사위를 던지고 동전을 던질 때, 나올 수 있는 모든 경우의 수를 구하시오.",
        solution: "12",
        explanation: `1) 주사위의 경우의 수: 6
2) 동전의 경우의 수: 2
3) 전체 경우의 수: 6 × 2 = 12`,
      },
    ],
    formulas: [
      {
        id: "count-form1",
        title: "합집합의 원소의 개수",
        formula: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
        description: "두 집합 A, B의 합집합의 원소의 개수",
      },
    ],
    difficulty: "기본",
  },
  {
    id: "permutation",
    chapter: "combination",
    section: 2,
    title: "순열",
    category: "경우의 수",
    description: "순서가 있는 배열의 수를 계산하는 순열을 학습합니다.",
    date: "2024-03-04",
    content: `
# 순열

## 순열의 정의
- n개에서 r개를 선택하여 순서대로 나열
- nPr = n!/(n-r)!
- n! = n × (n-1) × ... × 2 × 1

## 순열의 종류
1. 일반 순열
2. 원순열: (n-1)!
3. 중복순열: nⁿ
4. 같은 것이 있는 순열: n!/(p!q!r!)

## 원순열
1. 원형으로 배열하는 경우
2. 회전하여 같은 것은 한 가지로 봄

## 같은 것이 있는 순열
1. 전체 경우에서 중복되는 것을 나눔
2. n!을 각각의 같은 것의 개수의 팩토리얼로 나눔
    `,
    keywords: ["순열", "팩토리얼", "원순열", "중복순열"],
    examples: [
      {
        id: "perm-ex1",
        title: "순열 계산",
        problem: "5명을 3명씩 일렬로 세우는 방법의 수를 구하시오.",
        solution: "60",
        explanation: `1) 5P3을 계산
2) 5!/(5-3)! = 5!/2!
3) = 5 × 4 × 3 = 60`,
      },
      {
        id: "perm-ex2",
        title: "원순열",
        problem: "6명이 원탁에 앉는 방법의 수를 구하시오.",
        solution: "120",
        explanation: `1) 일반적인 순열은 6!
2) 원순열은 (6-1)!
3) = 5! = 120`,
      },
    ],
    formulas: [
      {
        id: "perm-form1",
        title: "순열 공식",
        formula: "nPr = n!/(n-r)!",
        description: "n개에서 r개를 선택하여 순서대로 나열하는 방법의 수",
      },
      {
        id: "perm-form2",
        title: "원순열 공식",
        formula: "(n-1)!",
        description: "n개를 원형으로 배열하는 방법의 수",
      },
    ],
    difficulty: "중급",
  },
];

export const PROBABILITY_TOPICS_2: MathTopic[] = [
  {
    id: "combination",
    chapter: "combination",
    section: 3,
    title: "조합",
    category: "경우의 수",
    description: "순서를 고려하지 않는 선택의 수를 계산하는 조합을 학습합니다.",
    date: "2024-03-06",
    content: `
# 조합

## 조합의 정의
- n개에서 r개를 선택 (순서 무관)
- nCr = n!/r!(n-r)!
- nCr = nPr/r!

## 조합의 성질
1. nC0 = nCn = 1
2. nCr = nC(n-r)
3. n+1Cr = nCr + nC(r-1)
4. nC1 = n

## 파스칼의 삼각형
1. 이항계수의 삼각형 배열
2. 각 수는 위의 두 수의 합
3. n번째 줄은 nC0부터 nCn까지

## 이항정리
1. (a+b)ⁿ의 전개
2. nC0aⁿ + nC1aⁿ⁻¹b + ... + nCnbⁿ
3. 각 항의 계수는 이항계수
    `,
    keywords: ["조합", "이항계수", "파스칼", "이항정리"],
    examples: [
      {
        id: "comb-ex1",
        title: "조합 계산",
        problem: "10명 중 3명을 선택하는 방법의 수를 구하시오.",
        solution: "120",
        explanation: `1) 10C3 계산
2) 10!/(3!(10-3)!)
3) = 10!/(3! × 7!)
4) = 120`,
      },
      {
        id: "comb-ex2",
        title: "이항정리",
        problem: "(a+b)³의 전개식을 구하시오.",
        solution: "a³ + 3a²b + 3ab² + b³",
        explanation: `1) n = 3 적용
2) 3C0a³ + 3C1a²b + 3C2ab² + 3C3b³
3) = 1a³ + 3a²b + 3ab² + 1b³`,
      },
    ],
    formulas: [
      {
        id: "comb-form1",
        title: "조합 공식",
        formula: "nCr = n!/r!(n-r)!",
        description: "n개에서 r개를 선택하는 방법의 수",
      },
      {
        id: "comb-form2",
        title: "이항정리",
        formula: "(a+b)ⁿ = Σ(k=0 to n) nCk × aⁿ⁻ᵏ × bᵏ",
        description: "이항식의 n제곱의 전개",
      },
    ],
    difficulty: "중급",
  },
];

export const ALL_PROBABILITY_TOPICS = [
  ...PROBABILITY_TOPICS_1,
  ...PROBABILITY_TOPICS_2,
];
