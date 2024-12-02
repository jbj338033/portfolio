import * as S from "./style";
import { BsLink45Deg } from "react-icons/bs";
import juniorDeveloper from "../../../assets/images/junior-developer.png";

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
  details: [
    {
      title: "대구소프트웨어마이스터고등학교 재학 중",
      period: "2024.03 ~ 2027.02",
      description: "소프트웨어 개발과에 재학 중입니다.",
    },
  ],
  logo: juniorDeveloper,
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
