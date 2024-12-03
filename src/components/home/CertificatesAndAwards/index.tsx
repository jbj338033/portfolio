import { useState } from "react";
import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
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
    description:
      "C, C++, C#, JAVA, Python에 대한 자격증으로 높은 수준의 프로그래밍 활용능력이 있음을 증명할 수 있습니다. ",
  },
];

const AWARDS: Award[] = [
  {
    name: "교내 해커톤 대회",
    organization: "대구소프트웨어마이스터고등학교",
    date: "2024.07",
    rank: "동상",
    description: "해커톤 대회에서 동상 수상",
  },
  {
    name: "6회 청소년 ICT 칭압기 켐프 본선 대회",
    organization: "대구창의융합교육원",
    date: "2024.10.24 ~ 2024.10.25",
    rank: "은상",
    description: "켐프 프로젝트로 우수한 성과 달성",
  },
  {
    name: "Topcit 21회",
    organization: "정보통신기획평가원",
    date: "2024.5",
    rank: "3수준",
    description: "484점",
  },
  {
    name: "Topcit 22회",
    organization: "정보통신기획평가원",
    date: "2024.11",
    rank: "3수준",
    description: "560점",
  },
];

const INITIAL_VISIBLE_CERTIFICATES = 4;
const INITIAL_VISIBLE_AWARDS = 4;

const CertificatesAndAwards = () => {
  const [isAwardsModalOpen, setIsAwardsModalOpen] = useState(false);
  const [isCertificatesModalOpen, setIsCertificatesModalOpen] = useState(false);

  const displayedAwards = AWARDS.slice(0, INITIAL_VISIBLE_AWARDS);
  const displayedCertificates = CERTIFICATES.slice(
    0,
    INITIAL_VISIBLE_CERTIFICATES
  );

  const renderCertificateItems = (certs: Certificate[]) =>
    certs.map((cert, index) => (
      <S.Item key={index}>
        <S.ItemHeader>
          <S.ItemTitle>{cert.name}</S.ItemTitle>
          <S.ItemDate>{cert.date}</S.ItemDate>
        </S.ItemHeader>
        <S.ItemOrganization>{cert.organization}</S.ItemOrganization>
        {cert.number && <S.ItemNumber>자격번호: {cert.number}</S.ItemNumber>}
        {cert.description && (
          <S.ItemDescription>{cert.description}</S.ItemDescription>
        )}
      </S.Item>
    ));

  const renderAwardItems = (awards: Award[]) =>
    awards.map((award, index) => (
      <S.Item key={index}>
        <S.ItemHeader>
          <S.ItemTitle>{award.name}</S.ItemTitle>
          <S.ItemDate>{award.date}</S.ItemDate>
        </S.ItemHeader>
        <S.ItemOrganization>{award.organization}</S.ItemOrganization>
        <S.ItemRank>{award.rank}</S.ItemRank>
        <S.ItemDescription>{award.description}</S.ItemDescription>
      </S.Item>
    ));

  return (
    <S.Container id="certificates">
      <S.TitleWrapper>
        <BsLink45Deg />
        <S.Title>CERTIFICATES & AWARDS</S.Title>
      </S.TitleWrapper>

      <S.Content>
        <S.Section>
          <S.SectionHeader>
            <S.SectionIcon>
              <HiOutlineAcademicCap />
            </S.SectionIcon>
            <S.SectionTitle>자격증</S.SectionTitle>
          </S.SectionHeader>

          <S.ItemsList>
            {renderCertificateItems(displayedCertificates)}
          </S.ItemsList>

          {CERTIFICATES.length > INITIAL_VISIBLE_CERTIFICATES && (
            <S.ShowMoreButton onClick={() => setIsCertificatesModalOpen(true)}>
              더보기 ({CERTIFICATES.length - INITIAL_VISIBLE_CERTIFICATES}+)
            </S.ShowMoreButton>
          )}
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            <S.SectionIcon>
              <IoMdTrophy />
            </S.SectionIcon>
            <S.SectionTitle>수상내역</S.SectionTitle>
          </S.SectionHeader>

          <S.ItemsList>{renderAwardItems(displayedAwards)}</S.ItemsList>

          {AWARDS.length > INITIAL_VISIBLE_AWARDS && (
            <S.ShowMoreButton onClick={() => setIsAwardsModalOpen(true)}>
              더보기 ({AWARDS.length - INITIAL_VISIBLE_AWARDS}+)
            </S.ShowMoreButton>
          )}
        </S.Section>
      </S.Content>

      {/* Certificates Modal */}
      {isCertificatesModalOpen && (
        <S.ModalOverlay onClick={() => setIsCertificatesModalOpen(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>
                <HiOutlineAcademicCap />
                전체 자격증
              </S.ModalTitle>
              <S.CloseButton onClick={() => setIsCertificatesModalOpen(false)}>
                <IoClose />
              </S.CloseButton>
            </S.ModalHeader>
            <S.ModalBody>
              <S.ModalGrid>{renderCertificateItems(CERTIFICATES)}</S.ModalGrid>
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

      {/* Awards Modal */}
      {isAwardsModalOpen && (
        <S.ModalOverlay onClick={() => setIsAwardsModalOpen(false)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>
                <IoMdTrophy />
                전체 수상내역
              </S.ModalTitle>
              <S.CloseButton onClick={() => setIsAwardsModalOpen(false)}>
                <IoClose />
              </S.CloseButton>
            </S.ModalHeader>
            <S.ModalBody>
              <S.ModalGrid>{renderAwardItems(AWARDS)}</S.ModalGrid>
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default CertificatesAndAwards;
