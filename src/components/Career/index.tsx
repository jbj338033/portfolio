import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
import juniorDeveloper from "../../assets/images/junior-developer.png";

interface CareerDetail {
  title: string;
  period: string;
  description: string;
}

interface Career {
  company: string;
  period?: string;
  description?: string;
  logo?: string;
  tags: string[];
  details: CareerDetail[];
}

const CAREER_DATA: Career = {
  company: "아직 신입 개발자입니다.",
  tags: ["아직 신입 개발자입니다."],
  details: [],
  logo: juniorDeveloper,
  // company: "(주) 오픈갤러리",
  // period: "2019.08 - 2023.09 (4년 1개월)",
  // description:
  //   "그림을 렌탈하려는 고객들과 그림을 그리는 작가들을 중개하는 그림 렌탈 서비스 플랫폼",
  // logo: OpenMusicLogo,
  // tags: ["Next.js, Django 개발", "테크 리드", "백오피스 기획"],
  // details: [
  //   {
  //     title: "작가 개인용 웹사이트 전체 리뉴얼 (Next.js)",
  //     period: "2022년 상반기",
  //     description:
  //       "Django로 품 스택 기반의 작가 개인용 웹사이트를 Next.js와 Django REST 기반으로 마이그레이션",
  //   },
  //   {
  //     title: "서버 배포 환경 변경 (AWS ECS)",
  //     period: "2021년 하반기",
  //     description:
  //       "서버 배포 환경을 AWS EB에서 Docker 기반의 AWS ECS로 변경 (개발 환경도 함께 변경)",
  //   },
  //   {
  //     title: "대규모 서버 정리 작업 리드",
  //     period: "2020년 중반기 - 2021년 중반기",
  //     description:
  //       "대규모 서버 정리 작업을 주도적으로 진행하여 코드 베이스 전반의 대청소 작업을 진행",
  //   },
  //   {
  //     title: "개발 업무 외 기타 업무 담당",
  //     period: "2020년 중반기 - 퇴사",
  //     description:
  //       "채용, 사수, 코드 리뷰의 역할을 담당하고 팀 내에서 지식 공유와 문서화를 적극적으로 진행",
  //   },
  //   {
  //     title: "백오피스의 전반적인 관리 및 각종 기능 개발/기획",
  //     period: "2019년 하반기 - 퇴사",
  //     description:
  //       "렌탈 서비스의 백오피스를 관리하며 필요한 기능들을 지속적으로 개발 및 기획",
  //   },
  // ],
};

const Career = () => {
  return (
    <S.Container id="career">
      <S.TitleWrapper>
        <BsLink45Deg />
        <S.Title>CAREER</S.Title>
      </S.TitleWrapper>

      <S.Content>
        <S.CompanyCard>
          <S.LogoWrapper>
            <S.Logo src={CAREER_DATA.logo} alt={CAREER_DATA.company} />
          </S.LogoWrapper>
          <S.CompanyInfo>
            <S.CompanyName>{CAREER_DATA.company}</S.CompanyName>
            <S.CompanyPeriod>{CAREER_DATA.period}</S.CompanyPeriod>
            <S.CompanyDescription>
              {CAREER_DATA.description}
            </S.CompanyDescription>
            <S.TagList>
              {CAREER_DATA.tags.map((tag, index) => (
                <S.Tag key={index}>{tag}</S.Tag>
              ))}
            </S.TagList>
          </S.CompanyInfo>
        </S.CompanyCard>

        <S.Timeline>
          {CAREER_DATA.details.map((detail, index) => (
            <S.TimelineItem key={index}>
              <S.TimelineDot />
              <S.TimelineContent>
                <S.TimelineHeader>
                  <S.TimelineTitle>{detail.title}</S.TimelineTitle>
                  <S.TimelinePeriod>{detail.period}</S.TimelinePeriod>
                </S.TimelineHeader>
                <S.TimelineDescription>
                  {detail.description}
                </S.TimelineDescription>
              </S.TimelineContent>
            </S.TimelineItem>
          ))}
        </S.Timeline>
      </S.Content>
    </S.Container>
  );
};

export default Career;
