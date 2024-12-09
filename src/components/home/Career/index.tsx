import { memo } from "react";
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

const CAREER_DATA: Readonly<Career> = {
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
} as const;

const Header = memo(() => (
  <S.Header>
    <S.Title>Career</S.Title>
    <S.Description>저의 교육 및 학력 사항입니다</S.Description>
  </S.Header>
));

Header.displayName = "Header";

const TagList = memo(({ tags }: { tags: readonly string[] }) => (
  <S.TagList>
    {tags.map((tag) => (
      <S.Tag key={tag}>{tag}</S.Tag>
    ))}
  </S.TagList>
));

TagList.displayName = "TagList";

const CompanyCard = memo(({ data }: { data: Readonly<Career> }) => (
  <S.CompanyCard>
    <S.LogoWrapper>
      {data.logo && (
        <S.Logo src={data.logo} alt={data.company} loading="lazy" />
      )}
    </S.LogoWrapper>
    <S.CompanyInfo>
      <S.CompanyName>{data.company}</S.CompanyName>
      {data.period && <S.CompanyPeriod>{data.period}</S.CompanyPeriod>}
      {data.description && (
        <S.CompanyDescription>{data.description}</S.CompanyDescription>
      )}
      <TagList tags={data.tags} />
    </S.CompanyInfo>
  </S.CompanyCard>
));

CompanyCard.displayName = "CompanyCard";

const TimelineItem = memo(({ detail }: { detail: CareerDetail }) => (
  <S.TimelineItem>
    <S.TimelineDot />
    <S.TimelineContent>
      <S.TimelineHeader>
        <S.TimelineTitle>{detail.title}</S.TimelineTitle>
        <S.TimelinePeriod>{detail.period}</S.TimelinePeriod>
      </S.TimelineHeader>
      <S.TimelineDescription>{detail.description}</S.TimelineDescription>
    </S.TimelineContent>
  </S.TimelineItem>
));

TimelineItem.displayName = "TimelineItem";

const Timeline = memo(({ details }: { details: readonly CareerDetail[] }) => (
  <S.Timeline>
    {details.map((detail) => (
      <TimelineItem key={detail.title} detail={detail} />
    ))}
  </S.Timeline>
));

Timeline.displayName = "Timeline";

const Career = () => {
  return (
    <S.Container id="career">
      <S.Inner>
        <Header />
        <S.Content>
          <CompanyCard data={CAREER_DATA} />
          <Timeline details={CAREER_DATA.details} />
        </S.Content>
      </S.Inner>
    </S.Container>
  );
};

export default memo(Career);
