import { AIChapter } from "../types/ai";

export const AI_CHAPTERS: AIChapter[] = [
  {
    id: "problem-solving",
    number: 1,
    title: "문제 정의 및 목표 설정",
    isCompleted: true,
    topics: [
      {
        id: "problem-background",
        title: "문제의 배경",
        number: 1,
        category: "프로젝트",
        description: "중고차 가격 예측을 위한 문제 배경과 목표 설정",
        date: "2024-12-20",
        content: `
# 문제의 배경

## 문제 상황
### 현재 시장의 문제점
- 개인 판매자들의 가격 책정 어려움
- 전문가 상담 과정의 복잡성
- 상담 비용 부담
- 정보 비대칭으로 인한 거래 어려움

### 시장 환경
- 중고차 시장의 지속적 성장세
- 개인 간 거래 증가 추세
- 가격 정보의 투명성 요구 증가
- 전문가 의존도가 높은 시장 구조

### 해결 필요성
- 개인 판매자들의 의사결정 지원 필요
- 시장 투명성 향상 요구
- 거래 비용 절감 필요성
- 데이터 기반 의사결정 체계 필요

## 프로젝트 목표
### 주요 목표
1. 정확한 가격 예측 모델 개발
   - 차량 기본 정보 기반 예측
   - 높은 신뢰도의 예측 결과 제공
   - 실시간 시장 가치 반영

2. 사용자 접근성 향상
   - 직관적인 인터페이스 구현
   - 최소한의 정보 입력으로 결과 도출
   - 누구나 쉽게 이용 가능한 시스템

3. 시장 효율성 증대
   - 정보 비대칭 해소
   - 거래 비용 절감
   - 시장 투명성 향상

### 기대 효과
- 개인 판매자의 의사결정 지원
- 중고차 시장의 디지털 전환 촉진
- 데이터 기반 거래 문화 정착
- 시장 참여자들의 비용 절감

## 해결 방안
### 기술적 접근
1. AI 모델 개발
   - 머신러닝 기반 가격 예측
   - 다양한 변수 고려
   - 지속적 모델 업데이트

2. 데이터 활용
   - 대규모 실거래 데이터 분석
   - 시장 트렌드 반영
   - 다양한 차종 정보 통합

3. 시스템 구현
   - 사용자 친화적 인터페이스
   - 실시간 예측 기능
   - 모바일 접근성 보장

### 구현 전략
1. 단계적 개발
   - 기본 모델 구축
   - 성능 검증 및 개선
   - 사용자 피드백 반영

2. 데이터 품질 관리
   - 신뢰성 있는 데이터 수집
   - 지속적 데이터 업데이트
   - 이상치 처리 체계 구축`,
        keywords: [
          "중고차 시장",
          "가격 예측",
          "AI 모델",
          "자동화",
          "시장 효율성",
          "데이터 기반",
          "사용자 접근성",
        ],
        prerequisites: [
          {
            title: "시장 분석",
            description: "중고차 시장 현황과 가격 결정 요인 이해",
          },
          {
            title: "데이터 분석",
            description: "기본적인 데이터 분석 능력과 통계 지식",
          },
        ],
      },
      {
        id: "problem-definition",
        title: "문제 정의와 가설",
        number: 2,
        category: "프로젝트",
        description: "프로젝트의 구체적 문제 정의와 가설 수립",
        date: "2024-12-20",
        content: `
# 문제 정의 및 가설 수립

## 문제 정의
### 핵심 문제
- 중고차 가격 예측의 어려움
- 전문가 의존적인 가격 책정 과정
- 비효율적인 정보 접근성

### 해결 과제
1. 가격 결정 요인 분석
   - 주요 변수 식별
   - 변수 간 관계 파악
   - 영향력 정도 측정

2. 예측 모델 개발
   - 정확한 가격 예측
   - 일관된 기준 적용
   - 객관적 평가 체계

3. 사용자 인터페이스 구현
   - 간편한 정보 입력
   - 이해하기 쉬운 결과 제공
   - 직관적인 사용 방법

## 연구 가설
### 주요 가설
"중고차의 연도, 주행거리, 연료 종류, 엔진 크기, 연비, 브랜드는 중고차 가격 결정에 유의미한 영향을 미칠 것이다"

### 세부 가설
1. 차량 연식 관련
   - 최신 연식일수록 높은 가격
   - 연식과 가격의 선형적 관계

2. 주행거리 관련
   - 주행거리와 가격의 반비례 관계
   - 특정 주행거리 구간별 가격 변동

3. 브랜드 관련
   - 프리미엄 브랜드의 높은 가격대
   - 브랜드별 가치 유지율 차이

4. 기타 특성
   - 엔진 크기와 가격의 비례 관계
   - 연비와 가격의 상관관계

## 분석 계획
### 데이터 분석 방향
1. 특성별 영향도 분석
   - 각 변수의 중요도 측정
   - 변수 간 상호작용 분석
   - 비선형 관계 탐색

2. 시계열 분석
   - 연도별 가격 변화 추이
   - 계절성 요인 확인
   - 시장 트렌드 파악

3. 브랜드 분석
   - 브랜드별 가격 분포
   - 브랜드 가치 영향 측정
   - 시장 포지셔닝 분석

### 검증 방법
1. 통계적 검증
   - 상관관계 분석
   - 회귀분석
   - 가설 검정

2. 모델 성능 평가
   - 예측 정확도 측정
   - 오차율 분석
   - 교차 검증

3. 실제 데이터 비교
   - 시장 가격과 비교
   - 예측 신뢰도 검증
   - 오차 원인 분석`,
        keywords: [
          "가설 수립",
          "문제 정의",
          "검증 계획",
          "예측 모델",
          "데이터 분석",
          "상관관계",
          "가격 결정 요인",
        ],
        prerequisites: [
          {
            title: "통계 분석",
            description: "기본적인 통계 및 가설 검정 이해",
          },
          {
            title: "데이터 사이언스",
            description: "데이터 분석 방법론과 도구 활용 능력",
          },
        ],
      },
    ],
  },
  {
    id: "data-preparation",
    number: 2,
    title: "데이터 수집 및 전처리",
    isCompleted: true,
    topics: [
      {
        id: "data-collection",
        title: "데이터 수집 및 구조화",
        number: 1,
        category: "머신러닝",
        description: "프로젝트에 필요한 데이터 수집 및 선정 과정",
        date: "2024-12-20",
        content: `
# 데이터 수집 및 구조화

## 데이터셋 개요
### 기본 정보
- 데이터 출처: Kaggle UK Used Car Dataset
- 데이터 규모: 108,540개 레코드
- 특성 개수: 9개 컬럼
- 데이터 기간: 최근 영국 중고차 시장 데이터

### 데이터 구조
1. 독립변수 (설명변수)
   - year: 차량 연식
   - transmission: 변속기 종류
   - mileage: 주행거리
   - fuelType: 연료 종류
   - tax: 세금
   - mpg: 연비
   - engineSize: 엔진 크기
   - brand: 차량 브랜드

2. 종속변수 (목표변수)
   - price: 차량 가격

## 데이터 선정 기준
### 주요 선정 이유
1. 데이터 완결성
   - 분석에 필요한 모든 특성 포함
   - 결측치 비율 적절
   - 데이터 품질 우수

2. 데이터 규모
   - 충분한 학습 데이터 양
   - 다양한 차량 정보 포함
   - 통계적 유의성 확보

3. 실용성
   - 실제 시장 데이터 반영
   - 현실적인 가격 정보
   - 실제 활용 가능한 특성들

4. 다양성
   - 다양한 브랜드 포함
   - 여러 가격대 분포
   - 다양한 차량 특성

### 데이터 특성 분석
1. 수치형 변수
   - price: 차량 가격 (단위: 파운드)
   - year: 1998-2020년 분포
   - mileage: 0-200,000km 범위
   - mpg: 연비 정보
   - engineSize: 엔진 배기량

2. 범주형 변수
   - transmission: Manual/Automatic
   - fuelType: Petrol/Diesel/Hybrid
   - brand: 다수의 자동차 브랜드

## 데이터 수집 과정
### 수집 방법
1. 데이터 다운로드
   - Kaggle 플랫폼 활용
   - API를 통한 데이터 접근
   - 데이터 무결성 검증

2. 초기 검증
   - 데이터 형식 확인
   - 기본 통계량 확인
   - 데이터 일관성 검토

3. 데이터 구조화
   - 컬럼 형식 통일
   - 데이터 타입 정리
   - 기본 정제 작업

### 품질 관리
1. 데이터 검증
   - 중복 데이터 확인
   - 논리적 오류 검사
   - 데이터 범위 검증

2. 메타데이터 관리
   - 변수 설명 문서화
   - 데이터 사전 작성
   - 특성 정의 명확화`,
        keywords: [
          "데이터 수집",
          "데이터셋",
          "Kaggle",
          "데이터 구조",
          "변수 선정",
          "데이터 품질",
          "메타데이터",
        ],
        prerequisites: [
          {
            title: "데이터 분석 기초",
            description: "기본적인 데이터 분석 도구 활용 능력",
            link: "https://www.kaggle.com/datasets/adityadesai13/used-car-dataset-ford-and-mercedes",
          },
          {
            title: "Python 기초",
            description: "Python을 이용한 데이터 처리 능력",
          },
        ],
      },
      {
        id: "data-preprocessing",
        title: "데이터 전처리 및 정제",
        number: 2,
        category: "머신러닝",
        description: "수집된 데이터의 정제 및 전처리 과정 상세",
        date: "2024-12-20",
        content: `
# 데이터 전처리 및 정제

## 결측치 처리
### 결측치 현황
1. tax 컬럼
   - 103,680개 결측치 발견
   - 전체 데이터의 95% 이상
   - 처리 방안 검토 필요

2. mpg 컬럼
   - 일부 결측치 존재
   - 전체 데이터의 5% 미만
   - 대체 가능한 수준

### 처리 방법
1. tax 컬럼 처리
   - 평균값 대체 적용
   - 결측치가 너무 많아 제거 고려
   - 모델 영향도 분석

2. mpg 컬럼 처리
   - 평균값 대체
   - 차종별 평균 적용
   - 이상치 고려 처리

## 이상치 처리
### 이상치 탐지
1. 수치형 변수 검사
   - 연도: 2060년 데이터 발견
   - 연비: 470.8 mpg 극단값
   - 주행거리 이상값 확인

2. 범주형 변수 검사
   - 잘못된 범주값 확인
   - 오타 데이터 검출
   - 비일관적 표기 검토

### 처리 결정
1. 보존 결정 이상치
   - 모델 견고성 향상 목적
   - 다양한 상황 학습용
   - 실제 데이터 반영

2. 제거 결정 이상치
   - 명백한 오류 데이터
   - 시스템적 오류 값
   - 극단적 이상값

## 데이터 변환
### 형식 변환
1. 가격 데이터
   - £ 기호 제거
   - 쉼표 제거
   - 숫자형 변환

2. 주행거리 데이터
   - 쉼표 제거
   - 단위 통일
   - 숫자형 변환

3. 엔진 크기
   - 표준 단위 변환
   - 소수점 처리
   - 이상값 보정

### 범주형 변수 처리
1. 변속기 종류
   - 일관된 표기법 적용
   - 범주 통합
   - 인코딩 준비

2. 연료 종류
   - 표준 카테고리 정의
   - 유사 범주 통합
   - 명확한 구분 적용

3. 브랜드
   - 대소문자 통일
   - 표기법 표준화
   - 브랜드명 정리

## 최종 데이터셋
### 데이터 구조
- 행: 108,540개 레코드
- 열: 9개 특성
- 메모리 크기 최적화

### 품질 검증
1. 데이터 완결성
   - 필수 필드 존재 확인
   - 데이터 타입 검증
   - 값 범위 확인

2. 데이터 일관성
   - 형식 통일성 검증
   - 논리적 유효성 확인
   - 참조 무결성 검사

3. 사용 준비도
   - 분석 가능 상태 확인
   - 모델링 적합성 검증
   - 확장성 검토`,
        keywords: [
          "데이터 정제",
          "결측치",
          "이상치",
          "데이터 변환",
          "전처리",
          "데이터 품질",
          "범주형 변수",
        ],
        prerequisites: [
          {
            title: "데이터 전처리",
            description: "데이터 클리닝과 전처리 기법 이해",
          },
          {
            title: "파이썬 데이터 처리",
            description: "pandas, numpy 등 데이터 처리 라이브러리 활용 능력",
          },
        ],
      },
    ],
  },
  {
    id: "data-analysis",
    number: 3,
    title: "데이터 분석 및 시각화",
    isCompleted: true,
    topics: [
      {
        id: "exploratory-analysis",
        title: "탐색적 데이터 분석",
        number: 1,
        category: "머신러닝",
        description: "데이터의 특성과 패턴을 이해하기 위한 탐색적 분석 과정",
        date: "2024-12-20",
        content: `
# 탐색적 데이터 분석 (EDA)

## 변수별 기초 통계 분석
### 수치형 변수 분석
1. 가격(Price) 분석
   - 평균: £XX,XXX
   - 중앙값: £XX,XXX
   - 표준편차: £X,XXX
   - 분포 특성: 오른쪽 꼬리 분포

2. 주행거리(Mileage) 분석
   - 평균: XX,XXX km
   - 중앙값: XX,XXX km
   - 분포 범위: 0-200,000 km
   - 구간별 빈도 분석

3. 연식(Year) 분석
   - 범위: 1998-2020년
   - 최빈값: 20XX년
   - 연도별 데이터 수
   - 시간에 따른 트렌드

### 범주형 변수 분석
1. 브랜드(Brand) 분석
   - 브랜드별 빈도수
   - 시장 점유율
   - 주요 브랜드 통계

2. 연료 유형(FuelType) 분석
   - 유형별 분포
   - 연도별 변화 추이
   - 브랜드별 선호도

## 상관관계 분석
### 주요 변수 간 관계
1. 연식-가격 관계
   - 상관계수: 0.85
   - 선형성 검증
   - 연도별 가격 변화율

2. 주행거리-가격 관계
   - 상관계수: -0.73
   - 비선형성 확인
   - 감가상각 패턴

3. 엔진크기-가격 관계
   - 상관계수: 0.52
   - 브랜드별 차이
   - 시장 선호도

### 다변량 분석
1. 변수 간 교차 분석
   - 브랜드별 가격-연식 관계
   - 연료유형별 가격-주행거리 관계
   - 복합 요인 영향 분석

2. 그룹별 특성
   - 브랜드별 가격 분포
   - 연식별 주행거리 특성
   - 시장 세그먼트 분석

## 인사이트 도출
### 주요 발견사항
1. 가격 결정 요인
   - 연식의 강한 영향력
   - 주행거리의 부정적 영향
   - 브랜드 가치의 중요성

2. 시장 트렌드
   - 최신 연식 선호도
   - 연비 중심 소비 패턴
   - 브랜드별 시장 위치

3. 특이 패턴
   - 이상치 분포 특성
   - 비선형적 관계
   - 시장 이례현상`,
        keywords: [
          "탐색적 데이터 분석",
          "EDA",
          "상관관계",
          "통계 분석",
          "패턴 분석",
          "변수 관계",
        ],
        prerequisites: [
          {
            title: "통계 기초",
            description: "기술통계와 추론통계의 기본 개념 이해",
          },
          {
            title: "데이터 분석 도구",
            description: "Python 통계 분석 라이브러리 활용 능력",
          },
        ],
      },
      {
        id: "data-visualization",
        title: "데이터 시각화",
        number: 2,
        category: "머신러닝",
        description: "분석 결과의 효과적인 시각화 구현",
        date: "2024-12-20",
        content: `
# 데이터 시각화

## 단변량 시각화
### 수치형 변수 시각화
1. 가격 분포
   - 히스토그램
   - 박스플롯
   - 밀도 플롯
   - 분위수 그래프

2. 주행거리 분포
   - 히스토그램
   - 로그 스케일 분포
   - 구간별 빈도
   - 이상치 표시

3. 연식 분포
   - 바 차트
   - 시계열 트렌드
   - 연도별 빈도

### 범주형 변수 시각화
1. 브랜드 분석
   - 막대 그래프
   - 파이 차트
   - 시장 점유율

2. 연료 유형
   - 도넛 차트
   - 스택 바 차트
   - 비율 그래프

## 이변량 시각화
### 수치형-수치형 관계
1. 산점도
   - 가격 vs 연식
   - 가격 vs 주행거리
   - 가격 vs 엔진크기

2. 회귀선
   - 선형 추세선
   - 비선형 패턴
   - 신뢰구간

### 범주형-수치형 관계
1. 박스플롯
   - 브랜드별 가격
   - 연료유형별 가격
   - 변속기별 가격

2. 바이올린 플롯
   - 분포 형태
   - 이상치 표시
   - 그룹 비교

## 다변량 시각화
### 복합 그래프
1. 페어플롯
   - 변수 간 관계
   - 분포 패턴
   - 상관성 확인

2. 히트맵
   - 상관관계 행렬
   - 색상 강도
   - 패턴 식별

### 인터랙티브 시각화
1. 산점도 매트릭스
   - 변수 선택
   - 줌 기능
   - 필터링

2. 동적 그래프
   - 시간에 따른 변화
   - 드릴다운
   - 상호작용 기능

## 시각화 인사이트
### 주요 발견
1. 가격 결정 패턴
   - 연식별 가격 추세
   - 주행거리 영향
   - 브랜드 프리미엄

2. 시장 세그먼테이션
   - 가격대별 특성
   - 브랜드 포지셔닝
   - 소비자 선호도

3. 이상치 및 특이점
   - 특이 데이터 패턴
   - 시장 이례현상
   - 추가 조사 필요 사항`,
        keywords: [
          "데이터 시각화",
          "그래프",
          "차트",
          "시각적 분석",
          "패턴 시각화",
          "인터랙티브 시각화",
        ],
        prerequisites: [
          {
            title: "시각화 라이브러리",
            description: "matplotlib, seaborn, plotly 등 시각화 도구 활용 능력",
          },
          {
            title: "시각화 설계",
            description: "효과적인 데이터 시각화 원칙과 기법 이해",
          },
        ],
      },
    ],
  },
  {
    id: "model-development",
    number: 4,
    title: "모델 개발 및 평가",
    isCompleted: true,
    topics: [
      {
        id: "model-selection",
        title: "알고리즘 선정 및 구현",
        number: 1,
        category: "머신러닝",
        description: "최적의 머신러닝 알고리즘 선정 및 구현 과정",
        date: "2024-12-20",
        content: `
# 알고리즘 선정 및 구현

## 알고리즘 분석
### RandomForest
1. 작동 원리
   - 다수의 결정 트리 생성
   - 앙상블 학습 방식
   - 투표 기반 예측

2. 장점
   - 과적합 방지
   - 특성 중요도 제공
   - 안정적인 성능
   - 이상치에 강건

3. 구현 방식
\`\`\`python
from sklearn.ensemble import RandomForestRegressor

# 모델 초기화
rf_model = RandomForestRegressor(
    n_estimators=100,
    max_depth=None,
    min_samples_split=2,
    random_state=42
)

# 모델 학습
rf_model.fit(X_train, y_train)

# 예측
predictions = rf_model.predict(X_test)
\`\`\`

### GradientBoosting
1. 작동 원리
   - 순차적 학습
   - 잔차 기반 개선
   - 가중치 업데이트

2. 장점
   - 높은 예측 성능
   - 유연한 학습 능력
   - 점진적 성능 향상

3. 구현 방식
\`\`\`python
from sklearn.ensemble import GradientBoostingRegressor

# 모델 초기화
gb_model = GradientBoostingRegressor(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=3,
    random_state=42
)

# 모델 학습
gb_model.fit(X_train, y_train)

# 예측
predictions = gb_model.predict(X_test)
\`\`\`

## 하이퍼파라미터 튜닝
### RandomForest 튜닝
1. 주요 파라미터
   - n_estimators: 트리 개수
   - max_depth: 트리 깊이
   - min_samples_split: 분할 기준
   - max_features: 특성 선택

2. 최적화 과정
   - 그리드 서치 활용
   - 교차 검증 적용
   - 성능 매트릭스 분석

### GradientBoosting 튜닝
1. 주요 파라미터
   - learning_rate: 학습률
   - n_estimators: 반복 횟수
   - max_depth: 트리 깊이
   - subsample: 샘플링 비율

2. 최적화 과정
   - 랜덤 서치 활용
   - 베이지안 최적화
   - 학습 곡선 분석`,
        keywords: [
          "RandomForest",
          "GradientBoosting",
          "앙상블 학습",
          "하이퍼파라미터",
          "모델 튜닝",
        ],
        prerequisites: [
          {
            title: "머신러닝 기초",
            description: "기본적인 머신러닝 알고리즘의 이해",
          },
          {
            title: "Python 프로그래밍",
            description: "scikit-learn 라이브러리 활용 능력",
          },
        ],
      },
      {
        id: "model-evaluation",
        title: "모델 평가 및 성능 분석",
        number: 2,
        category: "머신러닝",
        description: "개발된 모델의 성능 평가 및 비교 분석",
        date: "2024-12-20",
        content: `
# 모델 평가 및 성능 분석

## 성능 평가 지표
### 기본 지표
1. RMSE (Root Mean Square Error)
   - RandomForest: £1,982.31
   - GradientBoosting: £2,169.77
   - 오차의 크기 비교

2. R² Score (결정계수)
   - RandomForest: 0.9605
   - GradientBoosting: 0.9526
   - 설명력 비교

3. MAPE (Mean Absolute Percentage Error)
   - RandomForest: 7.15%
   - GradientBoosting: 8.73%
   - 상대적 오차율

### 교차 검증 결과
1. RandomForest
   - 평균 R² Score: 0.9551
   - 표준편차: ±0.0117
   - 안정성 확인

2. GradientBoosting
   - 평균 R² Score: 0.9498
   - 표준편차: ±0.0150
   - 변동성 분석

## 실제 예측 테스트
### 테스트 케이스
1. 최신 모델
   - 2018 BMW (5,000km)
   - 예측가: £35,200
   - 실제가: £34,995
   - 오차율: 0.59%

2. 중고 모델
   - 2016 Ford (80,000km)
   - 예측가: £8,500
   - 실제가: £8,995
   - 오차율: 5.50%

3. 기타 케이스
   - 다양한 브랜드/연식 테스트
   - 평균 오차율 분석
   - 예측 신뢰도 평가

## 모델 선정 결과
### 최종 선정: RandomForest
1. 선정 이유
   - 더 낮은 예측 오차
   - 더 높은 설명력
   - 안정적인 성능
   - 낮은 오차율

2. 성능 우위점
   - RMSE 약 187파운드 우수
   - R² Score 0.008 우수
   - MAPE 1.58%p 우수
   - 더 안정적인 예측`,
        keywords: [
          "모델 평가",
          "성능 지표",
          "교차 검증",
          "예측 정확도",
          "모델 비교",
        ],
        prerequisites: [
          {
            title: "평가 지표",
            description: "다양한 모델 평가 지표의 이해",
          },
          {
            title: "통계 분석",
            description: "기본적인 통계적 검증 방법론 이해",
          },
        ],
      },
      {
        id: "model-improvement",
        title: "모델 개선 및 최적화",
        number: 3,
        category: "머신러닝",
        description: "선정된 모델의 성능 개선 및 최적화 방안",
        date: "2024-12-20",
        content: `
# 모델 개선 및 최적화

## 개선 방안 분석
### 데이터 품질 개선
1. 결측치 처리 개선
   - 고급 대체 방법 적용
   - 패턴 기반 추정
   - 조건부 대체

2. 이상치 처리
   - 통계적 방법 적용
   - 도메인 지식 활용
   - 로버스트 처리

3. 데이터 보강
   - 추가 데이터 수집
   - 특성 보완
   - 데이터 균형

### 특성 엔지니어링
1. 새로운 특성 생성
   - 연식-주행거리 조합
   - 브랜드 가치 지수
   - 시간 기반 특성

2. 특성 선택 최적화
   - 중요도 기반 선택
   - 상관관계 분석
   - 차원 축소 검토

3. 특성 스케일링
   - 정규화 방법 개선
   - 비선형 변환
   - 로버스트 스케일링

## 모델 튜닝 전략
### 앙상블 접근
1. 모델 조합
   - RandomForest + GradientBoosting
   - 가중치 최적화
   - 스태킹 적용

2. 투표 방식
   - 가중 평균
   - 조건부 선택
   - 신뢰도 기반

### 하이퍼파라미터 최적화
1. 고급 탐색 방법
   - 베이지안 최적화
   - 유전 알고리즘
   - 랜덤 서치 확장

2. 교차 검증 강화
   - K-fold 확장
   - 시계열 고려
   - stratified 적용

## 목표 성능
### 개선 목표
1. 정확도 향상
   - MAPE 5% 이하
   - R² Score 0.97 이상
   - RMSE 15% 감소

2. 안정성 강화
   - 예측 일관성 향상
   - 이상치 견고성
   - 일반화 성능 개선

### 모니터링 계획
1. 성능 추적
   - 정기적 재평가
   - 드리프트 감지
   - 오차 패턴 분석

2. 유지보수 계획
   - 주기적 재학습
   - 데이터 업데이트
   - 모델 버전 관리`,
        keywords: [
          "모델 개선",
          "특성 엔지니어링",
          "하이퍼파라미터",
          "앙상블",
          "성능 최적화",
        ],
        prerequisites: [
          {
            title: "고급 머신러닝",
            description: "모델 최적화와 앙상블 기법의 이해",
          },
          {
            title: "특성 공학",
            description: "효과적인 특성 엔지니어링 방법론",
          },
        ],
      },
    ],
  },
];
