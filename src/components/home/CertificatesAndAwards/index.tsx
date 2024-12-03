import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoMdTrophy } from "react-icons/io";

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
      "프로그래밍 언어 활용, 데이터베이스 구현, 애플리케이션 구현 능력 검증",
  },
];

const AWARDS: Award[] = [
  {
    name: "교내 해커톤 대회",
    organization: "대구소프트웨어마이스터고등학교",
    date: "2024.07",
    rank: "동상",
    description: "음악 스트리밍 플랫폼 프로젝트로 우수한 성과 달성",
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

const CertificatesAndAwards = () => {
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
            {CERTIFICATES.map((cert, index) => (
              <S.Item key={index}>
                <S.ItemHeader>
                  <S.ItemTitle>{cert.name}</S.ItemTitle>
                  <S.ItemDate>{cert.date}</S.ItemDate>
                </S.ItemHeader>
                <S.ItemOrganization>{cert.organization}</S.ItemOrganization>
                {cert.number && (
                  <S.ItemNumber>자격번호: {cert.number}</S.ItemNumber>
                )}
                {cert.description && (
                  <S.ItemDescription>{cert.description}</S.ItemDescription>
                )}
              </S.Item>
            ))}
          </S.ItemsList>
        </S.Section>

        <S.Section>
          <S.SectionHeader>
            <S.SectionIcon>
              <IoMdTrophy />
            </S.SectionIcon>
            <S.SectionTitle>수상내역</S.SectionTitle>
          </S.SectionHeader>

          <S.ItemsList>
            {AWARDS.map((award, index) => (
              <S.Item key={index}>
                <S.ItemHeader>
                  <S.ItemTitle>{award.name}</S.ItemTitle>
                  <S.ItemDate>{award.date}</S.ItemDate>
                </S.ItemHeader>
                <S.ItemOrganization>{award.organization}</S.ItemOrganization>
                <S.ItemRank>{award.rank}</S.ItemRank>
                <S.ItemDescription>{award.description}</S.ItemDescription>
              </S.Item>
            ))}
          </S.ItemsList>
        </S.Section>
      </S.Content>
    </S.Container>
  );
};

export default CertificatesAndAwards;
