import { AIChapter, AITopic } from "../types/ai";

export const AI_CHAPTERS: AIChapter[] = [
  {
    id: "basics",
    title: "AI 기초 개념",
    isCompleted: true,
    topics: [
      {
        id: "intro",
        number: "1.1",
        title: "인공지능의 개요",
      },
      {
        id: "history",
        number: "1.2",
        title: "인공지능의 역사",
      },
      {
        id: "types",
        number: "1.3",
        title: "인공지능의 유형",
      },
    ],
  },
  {
    id: "ml",
    title: "머신러닝",
    isCompleted: false,
    topics: [
      {
        id: "supervised",
        number: "2.1",
        title: "지도학습",
      },
      {
        id: "unsupervised",
        number: "2.2",
        title: "비지도학습",
      },
      {
        id: "reinforcement",
        number: "2.3",
        title: "강화학습",
      },
    ],
  },
  {
    id: "dl",
    title: "딥러닝",
    isCompleted: false,
    topics: [
      {
        id: "neural-networks",
        number: "3.1",
        title: "신경망 기초",
      },
      {
        id: "cnn",
        number: "3.2",
        title: "합성곱 신경망 (CNN)",
      },
      {
        id: "rnn",
        number: "3.3",
        title: "순환 신경망 (RNN)",
      },
    ],
  },
];

export const AI_TOPICS: AITopic[] = [
  {
    id: "intro",
    chapter: 1,
    title: "인공지능의 개요",
    category: "기초",
    description: "인공지능의 기본 개념과 주요 응용 분야에 대해 알아봅니다.",
    date: "2024-01-01",
    content: `
# 인공지능이란?

인공지능(Artificial Intelligence, AI)은 인간의 학습능력, 추론능력, 지각능력, 자연언어의 이해능력 등을 컴퓨터 프로그램으로 실현한 기술입니다.

## 주요 특징

- 학습 능력: 데이터로부터 패턴을 학습할 수 있음
- 추론 능력: 학습한 내용을 바탕으로 새로운 상황에 대처
- 문제 해결: 복잡한 문제를 해결하는 능력

## 응용 분야

1. 컴퓨터 비전
2. 자연어 처리
3. 로보틱스
4. 전문가 시스템

## AI의 발전 단계

- 약한 AI (Weak AI)
- 강한 AI (Strong AI)
- 초인공지능 (Superintelligence)
    `,
    keywords: ["인공지능", "머신러닝", "딥러닝", "AI"],
    prerequisites: [
      {
        title: "프로그래밍 기초",
        description: "파이썬 프로그래밍 언어의 기본적인 이해가 필요합니다.",
      },
      {
        title: "수학적 기초",
        description: "기본적인 선형대수와 확률통계 지식이 도움이 됩니다.",
      },
    ],
  },
  {
    id: "neural-networks",
    chapter: 3,
    title: "신경망 기초",
    category: "딥러닝",
    description: "인공 신경망의 기본 구조와 작동 원리에 대해 학습합니다.",
    date: "2024-01-15",
    content: `
# 인공 신경망의 기초

인공 신경망은 생물학적 뉴런의 작동 방식을 모방한 수학적 모델입니다.

## 구성 요소

- 입력층 (Input Layer)
- 은닉층 (Hidden Layer)
- 출력층 (Output Layer)
- 가중치 (Weights)
- 활성화 함수 (Activation Function)

## 학습 과정

1. 순전파 (Forward Propagation)
2. 손실 계산 (Loss Calculation)
3. 역전파 (Backpropagation)
4. 가중치 업데이트

## 주요 활성화 함수

\`\`\`python
# ReLU 함수
def relu(x):
    return max(0, x)

# Sigmoid 함수
def sigmoid(x):
    return 1 / (1 + np.exp(-x))
\`\`\`
    `,
    keywords: ["신경망", "딥러닝", "역전파", "활성화함수"],
    prerequisites: [
      {
        title: "선형대수",
        description: "행렬 연산과 벡터의 이해가 필수적입니다.",
      },
      {
        title: "미적분",
        description: "그래디언트와 체인룰의 개념이 필요합니다.",
      },
    ],
  },
  // 더 많은 토픽들을 추가할 수 있습니다...
];
