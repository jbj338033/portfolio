import { AIChapter } from "../types/ai";

export const AI_CHAPTERS: AIChapter[] = [
  {
    id: "basics",
    number: 1,
    title: "AI 기초 개념",
    isCompleted: true,
    topics: [
      {
        id: "intro",
        title: "인공지능의 개요",
        number: 1,
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
        id: "history",
        title: "인공지능의 역사",
        number: 2,
        category: "기초",
        description:
          "인공지능 발전의 주요 이정표와 역사적 사건들을 살펴봅니다.",
        date: "2024-01-03",
        content: `
# 인공지능의 역사

## 1950년대: AI의 태동
- 1950: 튜링 테스트 제안
- 1956: 다트머스 회의, "인공지능" 용어 탄생
- 1958: 퍼셉트론 개발

## 1960-70년대: 첫 번째 황금기
- 전문가 시스템의 발전
- 자연어 처리 연구 시작
- ELIZA 등 초기 챗봇 개발

## 1980년대: AI의 겨울
- 전문가 시스템의 한계 직면
- 연구 자금 축소
- 새로운 접근 방식 필요성 대두

## 1990-2000년대: 지식 기반 접근
- 기계학습의 부상
- 데이터 기반 접근법 강화
- 실용적 응용 프로그램 개발

## 2010년대 이후: 딥러닝 혁명
- 2012: AlexNet의 등장
- 2016: AlphaGo의 승리
- 현재: GPT, DALL-E 등 대규모 언어 모델
    `,
        keywords: ["AI 역사", "튜링 테스트", "딥러닝", "머신러닝 역사"],
        prerequisites: [
          {
            title: "컴퓨터 과학 기초",
            description:
              "기본적인 컴퓨터 구조와 역사에 대한 이해가 도움됩니다.",
          },
        ],
      },
      {
        id: "types",
        title: "인공지능의 유형",
        number: 3,
        category: "기초",
        description: "다양한 인공지능의 유형과 특징을 학습합니다.",
        date: "2024-01-05",
        content: `
# 인공지능의 유형

## 약한 AI vs 강한 AI

### 약한 AI (Narrow AI)
- 특정 작업에 특화된 AI
- 현재 대부분의 AI 시스템
- 예: 체스 AI, 이미지 인식 시스템

### 강한 AI (General AI)
- 인간 수준의 지능
- 자의식과 자기 인식
- 아직 실현되지 않음

## 구현 방식에 따른 분류

### 규칙 기반 시스템
\`\`\`python
if condition:
    action1()
else:
    action2()
\`\`\`

### 기계학습 기반 시스템
\`\`\`python
model.train(data)
predictions = model.predict(new_data)
\`\`\`

### 하이브리드 시스템
- 규칙 기반 + 기계학습
- 장점 통합, 단점 보완
    `,
        keywords: ["약한 AI", "강한 AI", "규칙 기반", "하이브리드 AI"],
        prerequisites: [
          {
            title: "프로그래밍 로직",
            description: "기본적인 프로그래밍 로직의 이해가 필요합니다.",
          },
        ],
      },
    ],
  },
  {
    id: "ml",
    title: "머신러닝",
    number: 2,
    isCompleted: false,
    topics: [
      {
        id: "supervised",
        title: "지도학습",
        number: 1,
        category: "머신러닝",
        description:
          "레이블이 있는 데이터를 사용하는 지도학습의 개념과 알고리즘을 학습합니다.",
        date: "2024-01-10",
        content: `
# 지도학습 (Supervised Learning)

## 개념
지도학습은 입력값과 그에 대응하는 정답이 있는 데이터로 학습하는 방법입니다.

## 주요 알고리즘

### 선형 회귀
\`\`\`python
from sklearn.linear_model import LinearRegression

model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)
\`\`\`

### 로지스틱 회귀
- 이진 분류 문제에 사용
- 확률 기반 예측

### 결정 트리
- 트리 구조로 데이터 분류
- 해석이 용이한 장점

## 평가 지표
1. 정확도 (Accuracy)
2. 정밀도 (Precision)
3. 재현율 (Recall)
4. F1 Score
    `,
        keywords: ["지도학습", "회귀", "분류", "결정트리"],
        prerequisites: [
          {
            title: "확률과 통계",
            description: "기본적인 확률 통계 지식이 필요합니다.",
          },
          {
            title: "Python 기초",
            description: "파이썬 프로그래밍 능력이 필요합니다.",
          },
        ],
      },
      {
        id: "unsupervised",
        title: "비지도학습",
        number: 2,
        category: "머신러닝",
        description:
          "레이블이 없는 데이터에서 패턴을 찾는 비지도학습에 대해 학습합니다.",
        date: "2024-01-12",
        content: `
# 비지도학습 (Unsupervised Learning)

## 개념
비지도학습은 정답 없이 데이터의 숨겨진 구조를 찾는 학습 방법입니다.

## 주요 알고리즘

### K-means 클러스터링
\`\`\`python
from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=3)
kmeans.fit(data)
labels = kmeans.predict(new_data)
\`\`\`

### 주성분 분석 (PCA)
- 차원 축소에 사용
- 데이터 시각화에 유용

### 이상치 탐지
- 비정상 패턴 감지
- 보안, 품질 관리에 활용

## 응용 분야
1. 고객 세그먼테이션
2. 추천 시스템
3. 특징 추출
    `,
        keywords: ["비지도학습", "클러스터링", "차원축소", "PCA"],
        prerequisites: [
          {
            title: "선형대수",
            description: "벡터와 행렬의 기본 개념이 필요합니다.",
          },
          {
            title: "데이터 전처리",
            description: "데이터 정제와 정규화 관련 지식이 필요합니다.",
          },
        ],
      },
      {
        id: "reinforcement",
        title: "강화학습",
        number: 3,
        category: "머신러닝",
        description:
          "환경과의 상호작용을 통해 학습하는 강화학습의 원리를 이해합니다.",
        date: "2024-01-14",
        content: `
# 강화학습 (Reinforcement Learning)

## 기본 개념
- 에이전트 (Agent)
- 환경 (Environment)
- 상태 (State)
- 행동 (Action)
- 보상 (Reward)

## 주요 알고리즘

### Q-Learning
\`\`\`python
def q_learning(state, action, reward, next_state):
    old_value = Q[state, action]
    next_max = np.max(Q[next_state])
    new_value = (1 - alpha) * old_value + alpha * (reward + gamma * next_max)
    Q[state, action] = new_value
\`\`\`

### Policy Gradient
- 정책 직접 최적화
- 연속적 행동 공간에 적합

## 응용 사례
1. 게임 AI
2. 로봇 제어
3. 자원 관리
    `,
        keywords: ["강화학습", "Q-Learning", "정책 그래디언트", "보상"],
        prerequisites: [
          {
            title: "확률론",
            description: "마르코프 결정 프로세스의 이해가 필요합니다.",
          },
          {
            title: "최적화 이론",
            description: "기본적인 최적화 개념이 필요합니다.",
          },
        ],
      },
    ],
  },
  {
    id: "dl",
    title: "딥러닝",
    number: 3,
    isCompleted: false,
    topics: [
      {
        id: "neural-networks",
        title: "신경망 기초",
        number: 1,
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
      {
        id: "cnn",
        title: "합성곱 신경망 (CNN)",
        number: 2,
        category: "딥러닝",
        description: "이미지 처리에 특화된 CNN의 구조와 원리를 학습합니다.",
        date: "2024-01-17",
        content: `
# 합성곱 신경망 (CNN)

## 기본 구조
1. 합성곱 층 (Convolutional Layer)
2. 풀링 층 (Pooling Layer)
3. 완전연결 층 (Fully Connected Layer)

## 주요 개념

### 합성곱 연산
\`\`\`python
def convolution2d(image, kernel):
    return np.sum(image * kernel)
\`\`\`

### 특징 맵 (Feature Map)
- 필터 적용 결과
- 이미지 특징 추출

## 대표적인 CNN 아키텍처
1. LeNet-5
2. AlexNet
3. VGG
4. ResNet
    `,
        keywords: ["CNN", "합성곱", "풀링", "컴퓨터 비전"],
        prerequisites: [
          {
            title: "신경망 기초",
            description: "기본적인 신경망의 이해가 필요합니다.",
          },
          {
            title: "이미지 처리",
            description: "디지털 이미지의 기본 개념이 필요합니다.",
          },
        ],
      },
      {
        id: "rnn",
        title: "순환 신경망 (RNN)",
        number: 3,
        category: "딥러닝",
        description:
          "시퀀스 데이터 처리를 위한 RNN의 구조와 응용을 학습합니다.",
        date: "2024-01-19",
        content: `
# 순환 신경망 (RNN)

## 기본 구조
- 입력 층
- 은닉 상태
- 출력 층
- 순환 연결

## RNN 변형

### LSTM
\`\`\`python
def lstm_cell(input_x, prev_h, prev_c):
    # 게이트 계산
    forget_gate = sigmoid(W_f @ [prev_h, input_x] + b_f)
    input_gate = sigmoid(W_i @ [prev_h, input_x] + b_i)
    output_gate = sigmoid(W_o @ [prev_h, input_x] + b_o)
    
    # 상태 업데이트
    new_c = forget_gate * prev_c + input_gate * tanh(W_c @ [prev_h, input_x] + b_c)
    new_h = output_gate * tanh(new_c)
    
    return new_h, new_c
\`\`\`

### GRU
- LSTM의 간소화 버전
- 계산 효율성 개선

## 응용 분야
1. 자연어 처리
2. 음성 인식
3. 시계열 예측
    `,
        keywords: ["RNN", "LSTM", "GRU", "시퀀스 학습"],
        prerequisites: [
          {
            title: "시퀀스 데이터",
            description: "시계열 데이터의 특성 이해가 필요합니다.",
          },
          {
            title: "역전파 알고리즘",
            description: "시간에 따른 역전파의 이해가 필요합니다.",
          },
        ],
      },
    ],
  },
];
