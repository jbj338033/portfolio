import * as S from "./style";
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
      <S.Inner>
        <S.Header>
          <S.Title>Career</S.Title>
          <S.Description>저의 교육 및 학력 사항입니다</S.Description>
        </S.Header>

        <S.Content>
          <S.CompanyCard>
            <S.LogoWrapper>
              <S.Logo src={CAREER_DATA.logo} alt={CAREER_DATA.company} />
            </S.LogoWrapper>
            <S.CompanyInfo>
              <S.CompanyName>{CAREER_DATA.company}</S.CompanyName>
              {CAREER_DATA.period && (
                <S.CompanyPeriod>{CAREER_DATA.period}</S.CompanyPeriod>
              )}
              {CAREER_DATA.description && (
                <S.CompanyDescription>
                  {CAREER_DATA.description}
                </S.CompanyDescription>
              )}
              <S.TagList>
                {CAREER_DATA.tags.map((tag) => (
                  <S.Tag key={tag}>{tag}</S.Tag>
                ))}
              </S.TagList>
            </S.CompanyInfo>
          </S.CompanyCard>

          <S.Timeline>
            {CAREER_DATA.details.map((detail) => (
              <S.TimelineItem key={detail.title}>
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
      </S.Inner>
    </S.Container>
  );
};

export default Career;
