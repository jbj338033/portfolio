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
    name: "정보처리기능사",
    organization: "한국산업인력공단",
    date: "2024.05",
    number: "24-12345678",
    description:
      "프로그래밍 언어 활용, 데이터베이스 구현, 애플리케이션 구현 능력 검증",
  },
  {
    name: "SQLD",
    organization: "한국데이터산업진흥원",
    date: "2024.04",
    number: "24-87654321",
    description: "SQL 기본 및 활용 능력 검증",
  },
  {
    name: "리눅스마스터 2급",
    organization: "한국정보통신진흥협회",
    date: "2024.03",
    description: "리눅스 시스템 관리 및 운영 능력 검증",
  },
];

const AWARDS: Award[] = [
  {
    name: "교내 해커톤 대회",
    organization: "대구소프트웨어마이스터고등학교",
    date: "2024.05",
    rank: "대상",
    description: "음악 스트리밍 플랫폼 프로젝트로 우수한 성과 달성",
  },
  {
    name: "전국 고등학교 코딩 경진대회",
    organization: "한국정보교육진흥연구회",
    date: "2024.06",
    rank: "금상",
    description: "알고리즘 문제 해결 능력 검증 및 우수한 성적 달성",
  },
  {
    name: "IT 창업 아이디어 경진대회",
    organization: "대구광역시",
    date: "2024.07",
    rank: "우수상",
    description: "혁신적인 IT 서비스 아이디어 제안 및 발표",
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
