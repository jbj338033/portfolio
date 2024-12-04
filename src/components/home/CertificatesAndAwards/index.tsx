import { useState } from "react";
import * as S from "./style";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoMdTrophy } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface Certificate {
  name: string;
  organization: string;
  date: string;
  number?: string;
  description?: string;
}

interface Award {
  name: string;
  organization: string;
  date: string;
  rank?: string;
  description: string;
}

const CERTIFICATES: Certificate[] = [
  {
    name: "Cos Pro 2급",
    organization: "와이비엠넷",
    date: "2024.05",
    number: "24-12345678",
    description: [
      "소프트웨어 개발 실무 역량을 검증하는 민간자격증",
      "알고리즘 구현 및 문제 해결 능력 평가",
      "데이터 구조의 이해와 활용 능력 인증",
      "Python 언어를 사용한 프로그래밍 역량 검증",
      "우수한 성적 취득",
    ].join("\n"),
  },
];

const AWARDS: Award[] = [
  {
    name: "교내 해커톤 대회",
    organization: "대구소프트웨어마이스터고등학교",
    date: "2024.07",
    rank: "동상",
    description:
      "24시간 교내 해커톤 대회에서 '다문화 가정을 위한 소통 플랫폼'을 개발하여 동상 수상. 채팅 서버와 채팅 앱 화면 및 기능까지 구현했으며 WebSocket을 활용한 실시간 채팅 기능을 구현했습니다.",
  },
  {
    name: "DGIST 코딩 오딧세이",
    organization: "대구과학기술대학교",
    date: "2024.08.15 ~ 2024.08.16",
    rank: "금상",
    description:
      "DGIST 주최 고등학생 대상 48시간 해커톤 대회에서 'PP(Parent&Partner)' 서비스로 금상 수상. ChatGPT API를 활용하여 부모-자녀 간 감정적 메시지를 순화하는 실시간 채팅 시스템을 개발함. Spring Boot 기반의 백엔드 서버를 구축하고, WebSocket을 통한 실시간 채팅과 OpenAI API 연동을 담당하여 구현함. 세대 간 소통 개선이라는 사회적 가치와 기술적 구현력을 인정받아 최고상 수상.",
  },
  {
    name: "6회 청소년 ICT 창업기 캠프 본선 대회",
    organization: "대구창의융합교육원",
    date: "2024.10.24 ~ 2024.10.25",
    rank: "은상",
    description:
      "2일간의 ICT 창업 캠프 본선 대회에서 AI 기반 서비스를 개발하여 은상 수상. Python을 활용한 AI 모델 학습과 백엔드 서버 개발을 담당함. 실제 비즈니스 모델 구축과 기술적 구현력을 인정받아 우수한 성과를 달성함.",
  },
  {
    name: "Topcit 21회",
    organization: "정보통신기획평가원",
    date: "2024.5",
    rank: "3수준",
    description:
      "SW 역량 평가 시험에서 484점을 획득하여 3수준 달성. 기술 역량과 비즈니스 역량을 균형있게 평가받았으며, 특히 소프트웨어 개발 능력 부문에서 높은 점수 기록.",
  },
  {
    name: "Topcit 22회",
    organization: "정보통신기획평가원",
    date: "2024.11",
    rank: "3수준",
    description:
      "이전 회차 대비 76점 상승한 560점을 획득하여 3수준 재달성. 지속적인 학습을 통해 SW 개발 역량이 크게 향상되었음을 입증함. 특히 데이터베이스 설계와 프로그래밍 구현 영역에서 뛰어난 성과를 보임.",
  },
];

const isCertificate = (item: Certificate | Award): item is Certificate => {
  return "number" in item;
};

const isAward = (item: Certificate | Award): item is Award => {
  return "rank" in item;
};

const CertificatesAndAwards = () => {
  const [selectedTab, setSelectedTab] = useState<"certificates" | "awards">(
    "certificates"
  );
  const [selectedItem, setSelectedItem] = useState<Certificate | Award | null>(
    null
  );

  const renderCertificateItems = (certs: Certificate[]) =>
    certs.map((cert, index) => (
      <S.Item key={index} onClick={() => setSelectedItem(cert)}>
        <S.ItemHeader>
          <S.ItemTitle>{cert.name}</S.ItemTitle>
          <S.ItemDate>{cert.date}</S.ItemDate>
        </S.ItemHeader>
        <S.ItemOrganization>{cert.organization}</S.ItemOrganization>
        {cert.number && <S.ItemNumber>{cert.number}</S.ItemNumber>}
        <S.ItemDescription>{cert.description}</S.ItemDescription>
      </S.Item>
    ));

  const renderAwardItems = (awards: Award[]) =>
    awards.map((award, index) => (
      <S.Item key={index} onClick={() => setSelectedItem(award)}>
        <S.ItemHeader>
          <S.ItemTitle>{award.name}</S.ItemTitle>
          <S.ItemDate>{award.date}</S.ItemDate>
        </S.ItemHeader>
        <S.ItemOrganization>{award.organization}</S.ItemOrganization>
        {award.rank && <S.ItemRank>{award.rank}</S.ItemRank>}
        <S.ItemDescription>{award.description}</S.ItemDescription>
      </S.Item>
    ));

  return (
    <S.Container id="certificates">
      <S.Inner>
        <S.Header>
          <S.Title>Certificates & Awards</S.Title>
          <S.CategoryTabs>
            <S.CategoryTab
              isActive={selectedTab === "certificates"}
              onClick={() => setSelectedTab("certificates")}
            >
              <HiOutlineAcademicCap />
              Certificates
            </S.CategoryTab>
            <S.CategoryTab
              isActive={selectedTab === "awards"}
              onClick={() => setSelectedTab("awards")}
            >
              <IoMdTrophy />
              Awards
            </S.CategoryTab>
          </S.CategoryTabs>
        </S.Header>

        <S.Content>
          {selectedTab === "certificates"
            ? renderCertificateItems(CERTIFICATES)
            : renderAwardItems(AWARDS)}
        </S.Content>
      </S.Inner>

      {selectedItem && (
        <S.Modal onClick={() => setSelectedItem(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>
                {isCertificate(selectedItem) ? (
                  <HiOutlineAcademicCap />
                ) : (
                  <IoMdTrophy />
                )}
                {selectedItem.name}
              </S.ModalTitle>
              <S.CloseButton onClick={() => setSelectedItem(null)}>
                <IoClose />
              </S.CloseButton>
            </S.ModalHeader>

            <S.ModalBody>
              <S.ItemHeader>
                <S.ItemOrganization>
                  {selectedItem.organization}
                </S.ItemOrganization>
                <S.ItemDate>{selectedItem.date}</S.ItemDate>
              </S.ItemHeader>

              {isCertificate(selectedItem) && selectedItem.number && (
                <S.ItemNumber>{selectedItem.number}</S.ItemNumber>
              )}
              {isAward(selectedItem) && selectedItem.rank && (
                <S.ItemRank>{selectedItem.rank}</S.ItemRank>
              )}

              <S.ItemDescription>{selectedItem.description}</S.ItemDescription>
            </S.ModalBody>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default CertificatesAndAwards;
